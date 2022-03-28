import { BodyNode, DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import msg from "msg.js";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../BrowserInfo";
import CommonUtil from "../CommonUtil";
import Alert from "../component/shared/dialogue/Alert";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import UserInfo from "../component/shared/menu/UserInfo";
import GaiaSupernovaContract from "../contracts/GaiaSupernovaContract";
import SupernovaRewardDistributor from "../contracts/SupernovaRewardDistributor";
import Wallet from "../klaytn/Wallet";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

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
                                this.allNftDisplay = el("p", "..."),
                            ),
                            el("article",
                                el("h4", msg("INFO_TITLE2")),
                                this.blockDisplay = el("p", "..."),
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
                                el("p", msg("WARNING_DESC")),
                            ),
                            el(".button-container",
                                el("button", msg("REWARD_BUTTON"), {
                                    click: async () => {
                                        const address = await Wallet.loadAddress();
                                        if (address !== undefined) {
                                            const remainingTimeToClaim = await SupernovaRewardDistributor.remainingTimeToClaim(address);
                                            if (remainingTimeToClaim.eq(0)) {
                                                await SupernovaRewardDistributor.claim(address);
                                            } else {
                                                new Alert(msg("ALERT_UNABLE_RECEIVE_TITLE"), msg("ALERT_UNABLE_RECEIVE_DESC"));
                                            }
                                        }
                                    },
                                }),
                            ),
                        ),
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
        this.init();
        this.interval = setInterval(() => this.load(), 1000);

        select.domElement.value = BrowserInfo.language;
    }

    private async init() {
        Sentry.init({
            dsn: "https://8d5cc8ee60ec45a98e87e664834a68e3@o1156298.ingest.sentry.io/6270282",
            integrations: [new BrowserTracing()],
            tracesSampleRate: 1.0,
        });
    }

    private async load() {

        const totalDistribution = (await SupernovaRewardDistributor.totalDistribution()).add("14450505446857445842091");
        this.allRoyaltyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(totalDistribution))} KLAY`);
        this.nftRoyaltyDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(totalDistribution.div(1000)))} KLAY`);

        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const balance = await GaiaSupernovaContract.balanceOf(address);
            this.allNftDisplay.empty().appendText(String(balance.toNumber()));

            const remainingTimeToClaim = balance.eq(0) ? BigNumber.from(0) : await SupernovaRewardDistributor.remainingTimeToClaim(address);
            this.blockDisplay.empty().appendText(CommonUtil.displayBlockDuration(remainingTimeToClaim.toNumber()));

            const claimed = await SupernovaRewardDistributor.claimed(address);
            this.receivedDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(claimed))} KLAY`);

            const claimableReward = await SupernovaRewardDistributor.claimableReward(address);
            this.totalInterestDisplay.empty().appendText(`${CommonUtil.numberWithCommas(utils.formatEther(claimableReward))} KLAY`);
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
