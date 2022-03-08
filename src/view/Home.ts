import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import BrowserInfo from "../BrowserInfo";
import UserInfo from "../component/UserInfo";
import ViewUtil from "./ViewUtil";
import Klaytn from "../klaytn/Klaytn";

export default class Landing implements View {

    private container: DomNode;
    private interval: any;

    // Dashboard
    private allRoyaltyDisplay: DomNode;
    private nftRoyaltyDisplay: DomNode;

    // info
    private allNftDisplay: DomNode;
    private blockDisplay: DomNode;
    private receivedDisplay: DomNode;
    private totalInterestDisplay: DomNode;

    constructor() {
        document.title = msg("TITLE");
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".home-view",
                el("header",
                    el(".nav",
                        el(".logo",
                            el("a", { click: () => { ViewUtil.go("/"); } }, el("img", { src: "/images/shared/img/img-gaia-supernova-logo.png", alt: "gaia supernova logo" })),
                        ),
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
                        ),
                    ),
                ),
                el("main",
                    el("section.dashboard-container",
                        el("h1", msg("TITLE")),
                        el("h2", msg("DASHBOARD_DESC")),
                        el("section",
                            el("article",
                                el("h3", msg("DASHBOARD_TITLE1")),
                                this.allRoyaltyDisplay = el("p", "... KLAY"),
                            ),
                            el("article",
                                el("header"),
                                el("h3", msg("DASHBOARD_TITLE2")),
                                this.nftRoyaltyDisplay = el("p", "... KLAY"),
                            ),
                        ),
                    ),
                    el("section.info-container",
                        el("h2", msg("INFO_TITLE")),
                        el("h3", msg("INFO_DESC")),
                        el("section",
                            el("article",
                                el("h4", msg("INFO_TITLE1")),
                                this.allNftDisplay = el("p", "... NFTs"),
                            ),
                            el("article",
                                el("h4", msg("INFO_TITLE2")),
                                this.blockDisplay = el("p", "{current block} / {reward block}"),
                            ),
                            el("article",
                                el("h4", msg("INFO_TITLE3")),
                                this.receivedDisplay = el("p", "... KLAY"),
                            ),
                            el("article",
                                el("h4", msg("INFO_TITLE4")),
                                this.totalInterestDisplay = el("p", "... KLAY"),
                            ),
                        ),
                        el(".action-container",
                            el(".warning-container",
                                el("img", { src: "/images/shared/icn/icn-error-red.svg", alt: "warning" }),
                                el("p", msg("WARNING_DESC"))
                            ),
                            el(".button-container",
                                el("button", msg("REWARD_BUTTON")),
                                el("a", msg("OPENSEA_BUTTON"), { href: "https://opensea.io/account?search[resultModel]=ASSETS&search[sortBy]=LAST_TRANSFER_DATE&search[query]=gaia%20supernova", target: "_blank" }),
                            ),
                        ),
                    ),
                ),
                el("footer",
                    el(".footer-container",
                        el(".sns",
                            el("a.opensea", { href: "https://opensea.io/collection/gaia-kronos", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-opensea.svg" }),
                            ),
                            el("a.discord", { href: "https://discord.gg/gaia", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-discord.svg" }),
                            ),
                            el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-twitter.svg" }),
                            ),
                            el("a.gitbook", { href: "https://docs.gaiakronos.com/kr/", target: "_blank" },
                                el("img", { src: "/images/shared/icn/icn-notion.svg" }),
                            ),
                        ),
                        el(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"),
                    ),
                ),
            ))
        );
        this.interval = setInterval(() => this.load(), 1000);

        select.domElement.value = BrowserInfo.language;
    }

    private async load() {
        this.blockDisplay.domElement.innerText = "{current block} / {reward block}".replace(/{current block}/, String(await Klaytn.loadBlockNumber()))
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
