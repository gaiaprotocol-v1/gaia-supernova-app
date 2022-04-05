"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const debouncer_1 = __importDefault(require("@hanul/debouncer"));
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const skyutil_1 = __importDefault(require("skyutil"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const NftItem_1 = __importDefault(require("../component/NftItem"));
const MobileMenu_1 = __importDefault(
  require("../component/shared/menu/MobileMenu")
);
const PCMenu_1 = __importDefault(require("../component/shared/menu/PCMenu"));
const UserInfo_1 = __importDefault(
  require("../component/shared/menu/UserInfo")
);
const GaiaSupernovaContract_1 = __importDefault(
  require("../contracts/GaiaSupernovaContract")
);
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Nft {
  constructor() {
    this.tokenIds = [];
    this.resizeDebouncer = new debouncer_1.default(200, () => this.loadNFTs());
    document.title = (0, msg_js_1.default)("TITLE");
    let select;
    skynode_1.BodyNode.append(
      (this.container = (0, skynode_1.el)(
        ".nft-view",
        (0, skynode_1.el)(
          "header.header",
          (0, skynode_1.el)(
            ".nav",
            (0, skynode_1.el)(
              ".logo",
              (0, skynode_1.el)(
                "a",
                { href: "/" },
                (0, skynode_1.el)("img", {
                  src: "/images/shared/img/img-gaia-supernova-logo.png",
                  alt: "gaia supernova logo",
                })
              )
            ),
            new PCMenu_1.default(),
            (0, skynode_1.el)(
              ".right",
              (select = (0, skynode_1.el)(
                "select.language-select",
                (0, skynode_1.el)("option", "한국어 🇰🇷 ", { value: "ko" }),
                (0, skynode_1.el)("option", "English 🇺🇸 ", { value: "en" }),
                {
                  change: () => {
                    BrowserInfo_1.default.changeLanguage(
                      select.domElement.value
                    );
                  },
                }
              )),
              new UserInfo_1.default(),
              (0, skynode_1.el)(
                "a.menu-button",
                (0, skynode_1.el)("i.fas.fa-bars"),
                {
                  click: (event, button) => {
                    const rect = button.rect;
                    new MobileMenu_1.default({
                      left: rect.right - 170,
                      top: rect.bottom,
                    }).appendTo(skynode_1.BodyNode);
                  },
                }
              )
            )
          )
        ),
        (0, skynode_1.el)(
          "main",
          (0, skynode_1.el)(
            ".nft-container",
            (0, skynode_1.el)("h1", (0, msg_js_1.default)("NFT_TITLE")),
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("NFT_DESC")),
            (this.nftList = (0, skynode_1.el)(".list-container"))
          )
        ),
        (0, skynode_1.el)(
          "footer",
          (0, skynode_1.el)(
            ".footer-container",
            (0, skynode_1.el)(
              ".sns",
              (0, skynode_1.el)(
                "a.opensea",
                {
                  href: "https://opensea.io/collection/gaia-supernova",
                  target: "_blank",
                },
                (0, skynode_1.el)("img", {
                  src: "/images/shared/icn/icn-opensea.svg",
                })
              ),
              (0, skynode_1.el)(
                "a.discord",
                {
                  href: "https://discord.com/invite/SjM4meh3hd",
                  target: "_blank",
                },
                (0, skynode_1.el)("img", {
                  src: "/images/shared/icn/icn-discord.svg",
                })
              ),
              (0, skynode_1.el)(
                "a.twitter",
                { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                (0, skynode_1.el)("img", {
                  src: "/images/shared/icn/icn-twitter.svg",
                })
              ),
              (0, skynode_1.el)(
                "a.gitbook",
                {
                  href: "https://gaiaprotocol.notion.site/Gaia-Supernova-Docs-7f6a1ea8c1294c9ca5669481270b2e78",
                  target: "_blank",
                },
                (0, skynode_1.el)("img", {
                  src: "/images/shared/icn/icn-notion.svg",
                })
              )
            ),
            (0, skynode_1.el)(
              ".link-tree",
              (0, skynode_1.el)("a.kronos", "Gaia Kronos", {
                href: "https://app.gaiakronos.com/",
                target: "_blank",
              }),
              (0, skynode_1.el)(".hr"),
              (0, skynode_1.el)("a.supernova", "Gaia Supernova", {
                href: "https://app.gaiasupernova.com/",
                target: "_blank",
              })
            ),
            (0, skynode_1.el)(
              ".copyright",
              "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"
            )
          )
        )
      ))
    );
    select.domElement.value = BrowserInfo_1.default.language;
    this.resizeDebouncer.run();
    Wallet_1.default.on("connect", () => this.resizeDebouncer.run());
  }
  async loadNFTs() {
    const address = await Wallet_1.default.loadAddress();
    if (address !== undefined) {
      const balance = (
        await GaiaSupernovaContract_1.default.balanceOf(address)
      ).toNumber();
      const promises = [];
      this.tokenIds = [];
      skyutil_1.default.repeat(balance, (i) => {
        const promise = async (index) => {
          const item = new NftItem_1.default().appendTo(this.nftList);
          const tokenId = (
            await GaiaSupernovaContract_1.default.tokenOfOwnerByIndex(
              address,
              index
            )
          ).toNumber();
          if (tokenId === 0) {
            item.delete();
          } else {
            item.init(tokenId);
            this.tokenIds.push(tokenId);
          }
        };
        promises.push(promise(i));
      });
      await Promise.all(promises);
    }
    const promises = [];
    await Promise.all(promises);
  }
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = Nft;
//# sourceMappingURL=Nft.js.map
