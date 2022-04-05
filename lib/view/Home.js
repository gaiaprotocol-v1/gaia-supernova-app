"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const Sentry = __importStar(require("@sentry/browser"));
const tracing_1 = require("@sentry/tracing");
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
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
const SupernovaRewardDistributor_1 = __importDefault(
  require("../contracts/SupernovaRewardDistributor")
);
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Home {
  constructor() {
    document.title = (0, msg_js_1.default)("TITLE");
    let select;
    skynode_1.BodyNode.append(
      (this.container = (0, skynode_1.el)(
        ".home-view",
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
            "section.dashboard-container",
            (0, skynode_1.el)("h1", (0, msg_js_1.default)("TITLE")),
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("DASHBOARD_DESC")),
            (0, skynode_1.el)(
              "section",
              (0, skynode_1.el)(
                "article",
                (0, skynode_1.el)(
                  "h3",
                  (0, msg_js_1.default)("DASHBOARD_TITLE1")
                ),
                (this.allRoyaltyDisplay = (0, skynode_1.el)("p", "... KLAY"))
              ),
              (0, skynode_1.el)(
                "article",
                (0, skynode_1.el)("header"),
                (0, skynode_1.el)(
                  "h3",
                  (0, msg_js_1.default)("DASHBOARD_TITLE2")
                ),
                (this.nftRoyaltyDisplay = (0, skynode_1.el)("p", "... KLAY"))
              )
            )
          ),
          (0, skynode_1.el)(
            "section.info-container",
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("INFO_TITLE")),
            (0, skynode_1.el)("h3", (0, msg_js_1.default)("INFO_DESC")),
            (0, skynode_1.el)(
              "section",
              (0, skynode_1.el)(
                "article",
                (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE1")),
                (this.allNftDisplay = (0, skynode_1.el)("p", "..."))
              ),
              (0, skynode_1.el)(
                "article",
                (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE2")),
                (this.blockDisplay = (0, skynode_1.el)("p", "..."))
              ),
              (0, skynode_1.el)(
                "article",
                (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE3")),
                (this.receivedDisplay = (0, skynode_1.el)("p", "... KLAY"))
              ),
              (0, skynode_1.el)(
                "article",
                (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE4")),
                (this.totalInterestDisplay = (0, skynode_1.el)("p", "... KLAY"))
              )
            ),
            (0, skynode_1.el)(
              ".action-container",
              (0, skynode_1.el)(
                ".warning-container",
                (0, skynode_1.el)("img", {
                  src: "/images/shared/icn/icn-error-red.svg",
                  alt: "warning",
                }),
                (0, skynode_1.el)("p", (0, msg_js_1.default)("WARNING_DESC"))
              ),
              (0, skynode_1.el)(
                ".button-container",
                (0, skynode_1.el)(
                  "button",
                  (0, msg_js_1.default)("REWARD_BUTTON"),
                  {
                    click: async () => {
                      const address = await Wallet_1.default.loadAddress();
                      if (address !== undefined) {
                        const remainingTimeToClaim =
                          await SupernovaRewardDistributor_1.default.remainingTimeToClaim(
                            address
                          );
                        if (remainingTimeToClaim.eq(0)) {
                          await SupernovaRewardDistributor_1.default.claim(
                            address
                          );
                        } else {
                          new Alert_1.default(
                            (0, msg_js_1.default)("ALERT_UNABLE_RECEIVE_TITLE"),
                            (0, msg_js_1.default)("ALERT_UNABLE_RECEIVE_DESC")
                          );
                        }
                      }
                    },
                  }
                )
              )
            )
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
    this.init();
    this.interval = setInterval(() => this.load(), 1000);
    select.domElement.value = BrowserInfo_1.default.language;
  }
  async init() {
    Sentry.init({
      dsn: "https://8d5cc8ee60ec45a98e87e664834a68e3@o1156298.ingest.sentry.io/6270282",
      integrations: [new tracing_1.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }
  async load() {
    const totalDistribution = (
      await SupernovaRewardDistributor_1.default.totalDistribution()
    ).add("14450505446857445842091");
    this.allRoyaltyDisplay
      .empty()
      .appendText(
        `${CommonUtil_1.default.numberWithCommas(
          ethers_1.utils.formatEther(totalDistribution)
        )} KLAY`
      );
    this.nftRoyaltyDisplay
      .empty()
      .appendText(
        `${CommonUtil_1.default.numberWithCommas(
          ethers_1.utils.formatEther(totalDistribution.div(1000))
        )} KLAY`
      );
    const address = await Wallet_1.default.loadAddress();
    if (address !== undefined) {
      const balance = await GaiaSupernovaContract_1.default.balanceOf(address);
      this.allNftDisplay.empty().appendText(String(balance.toNumber()));
      const remainingTimeToClaim = balance.eq(0)
        ? ethers_1.BigNumber.from(0)
        : await SupernovaRewardDistributor_1.default.remainingTimeToClaim(
            address
          );
      this.blockDisplay
        .empty()
        .appendText(
          CommonUtil_1.default.displayBlockDuration(
            remainingTimeToClaim.toNumber()
          )
        );
      const claimed = await SupernovaRewardDistributor_1.default.claimed(
        address
      );
      this.receivedDisplay
        .empty()
        .appendText(
          `${CommonUtil_1.default.numberWithCommas(
            ethers_1.utils.formatEther(claimed)
          )} KLAY`
        );
      const claimableReward =
        await SupernovaRewardDistributor_1.default.claimableReward(address);
      this.totalInterestDisplay
        .empty()
        .appendText(
          `${CommonUtil_1.default.numberWithCommas(
            ethers_1.utils.formatEther(claimableReward)
          )} KLAY`
        );
    }
  }
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
