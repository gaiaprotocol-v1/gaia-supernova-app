import Debouncer from "@hanul/debouncer";
import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import SkyUtil from "skyutil";
import BrowserInfo from "../BrowserInfo";
import NftItem from "../component/NftItem";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import UserInfo from "../component/shared/menu/UserInfo";
import GaiaSupernovaContract from "../contracts/GaiaSupernovaContract";
import Wallet from "../klaytn/Wallet";
import ViewUtil from "./ViewUtil";

export default class Nft implements View {

    private container: DomNode;
    private nftList: DomNode;

    private tokenIds: number[] = [];

    constructor() {
        document.title = msg("TITLE");
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".nft-view",
                el("header.header",
                    el(".nav",
                        el(".logo",
                            el("a", { href: "/" }, el("img", { src: "/images/shared/img/img-gaia-supernova-logo.png", alt: "gaia supernova logo" })),
                        ),
                        new PCMenu(),
                        el(".right",
                            select = el("select.language-select",
                                el("option", "한국어 🇰🇷 ", { value: "ko" }),
                                el("option", "English 🇺🇸 ", { value: "en" }),
                                {
                                    change: () => {
                                        BrowserInfo.changeLanguage(select.domElement.value);
                                    },
                                },
                            ),
                            new UserInfo(),
                            el("a.menu-button", el("i.fas.fa-bars"), {
                                click: (event, button) => {
                                    const rect = button.rect;
                                    new MobileMenu({ left: rect.right - 170, top: rect.bottom }).appendTo(BodyNode);
                                },
                            }),
                        ),
                    ),
                ),
                el("main",
                    el(".nft-container",
                        el("h1", msg("NFT_TITLE")),
                        el("h2", msg("NFT_DESC")),
                        this.nftList = el(".list-container",),
                    ),
                ),
                el("footer",
                    el(".footer-container",
                        el(".sns",
                            el("a.opensea", { href: "https://opensea.io/collection/gaia-supernova", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-opensea.svg" }),
                            ),
                            el("a.discord", { href: "https://discord.gg/gaia", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-discord.svg" }),
                            ),
                            el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-twitter.svg" }),
                            ),
                            el("a.gitbook", { href: "https://gaiaprotocol.notion.site/Gaia-Supernova-Docs-7f6a1ea8c1294c9ca5669481270b2e78", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-notion.svg" }),
                            ),
                        ),
                        el(".link-tree",
                            el("a.kronos", "Gaia Kronos", { href: "https://app.gaiakronos.com/", target: "_blank" }),
                            el(".hr"),
                            el("a.supernova", "Gaia Supernova", { href: "https://app.gaiasupernova.com/", target: "_blank" }),
                        ),
                        el(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"),
                    ),
                ),
            ))
        );

        select.domElement.value = BrowserInfo.language;
        this.resizeDebouncer.run();
        Wallet.on("connect", () => this.resizeDebouncer.run());
    }

    private resizeDebouncer: Debouncer = new Debouncer(200, () => this.loadNFTs());

    private async loadNFTs() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            const balance = (await GaiaSupernovaContract.balanceOf(address)).toNumber();
            const promises: Promise<void>[] = [];

            this.tokenIds = [];
            SkyUtil.repeat(balance, (i: number) => {
                const promise = async (index: number) => {
                    const item = new NftItem().appendTo(this.nftList);
                    const tokenId = (await GaiaSupernovaContract.tokenOfOwnerByIndex(address, index)).toNumber();
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
        const promises: Promise<void>[] = [];
        await Promise.all(promises);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
