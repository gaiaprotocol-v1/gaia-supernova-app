"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const UserInfo_1 = __importDefault(require("../component/UserInfo"));
const GaiaSupernovaContract_1 = __importDefault(require("../contracts/GaiaSupernovaContract"));
const SupernovaRewardDistributor_1 = __importDefault(require("../contracts/SupernovaRewardDistributor"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Landing {
    constructor() {
        document.title = (0, msg_js_1.default)("TITLE");
        let select;
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("header", (0, skynode_1.el)(".nav", (0, skynode_1.el)(".logo", (0, skynode_1.el)("a", { click: () => { ViewUtil_1.default.go("/"); } }, (0, skynode_1.el)("img", { src: "/images/shared/img/img-gaia-supernova-logo.png", alt: "gaia supernova logo" }))), (0, skynode_1.el)(".right", select = (0, skynode_1.el)("select.language-select", (0, skynode_1.el)("option", "한국어 🇰🇷 ", { value: "ko" }), (0, skynode_1.el)("option", "English 🇺🇸 ", { value: "en" }), {
            change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
            },
        }), new UserInfo_1.default()))), (0, skynode_1.el)("main", (0, skynode_1.el)("section.dashboard-container", (0, skynode_1.el)("h1", (0, msg_js_1.default)("TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("DASHBOARD_DESC")), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("h3", (0, msg_js_1.default)("DASHBOARD_TITLE1")), this.allRoyaltyDisplay = (0, skynode_1.el)("p", "... KLAY")), (0, skynode_1.el)("article", (0, skynode_1.el)("header"), (0, skynode_1.el)("h3", (0, msg_js_1.default)("DASHBOARD_TITLE2")), this.nftRoyaltyDisplay = (0, skynode_1.el)("p", "... KLAY")))), (0, skynode_1.el)("section.info-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("INFO_TITLE")), (0, skynode_1.el)("h3", (0, msg_js_1.default)("INFO_DESC")), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE1")), this.allNftDisplay = (0, skynode_1.el)("p", "...")), (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE2")), this.blockDisplay = (0, skynode_1.el)("p", "...")), (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE3")), this.receivedDisplay = (0, skynode_1.el)("p", "... KLAY")), (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE4")), this.totalInterestDisplay = (0, skynode_1.el)("p", "... KLAY"))), (0, skynode_1.el)(".action-container", (0, skynode_1.el)(".warning-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-error-red.svg", alt: "warning" }), (0, skynode_1.el)("p", (0, msg_js_1.default)("WARNING_DESC"))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", (0, msg_js_1.default)("REWARD_BUTTON"), {
            click: async () => {
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    const remainingTimeToClaim = await SupernovaRewardDistributor_1.default.remainingTimeToClaim(address);
                    if (remainingTimeToClaim.eq(0)) {
                        await SupernovaRewardDistributor_1.default.claim(address);
                    }
                    else {
                        new Alert_1.default((0, msg_js_1.default)("ALERT_UNABLE_RECEIVE_TITLE"), (0, msg_js_1.default)("ALERT_UNABLE_RECEIVE_DESC"));
                    }
                }
            },
        }), (0, skynode_1.el)("a", (0, msg_js_1.default)("OPENSEA_BUTTON"), { href: "https://opensea.io/account?search[resultModel]=ASSETS&search[sortBy]=LAST_TRANSFER_DATE&search[query]=gaia%20supernova", target: "_blank" }))))), (0, skynode_1.el)("footer", (0, skynode_1.el)(".footer-container", (0, skynode_1.el)(".sns", (0, skynode_1.el)("a.opensea", { href: "https://opensea.io/collection/gaia-kronos", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-opensea.svg" })), (0, skynode_1.el)("a.discord", { href: "https://discord.gg/gaia", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-discord.svg" })), (0, skynode_1.el)("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-twitter.svg" })), (0, skynode_1.el)("a.gitbook", { href: "https://docs.gaiakronos.com/kr/", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-notion.svg" }))), (0, skynode_1.el)(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"))))));
        this.interval = setInterval(() => this.load(), 1000);
        select.domElement.value = BrowserInfo_1.default.language;
    }
    async load() {
        const totalDistribution = await SupernovaRewardDistributor_1.default.totalDistribution();
        this.allRoyaltyDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(totalDistribution))} KLAY`);
        this.nftRoyaltyDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(totalDistribution.div(1000)))} KLAY`);
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = await GaiaSupernovaContract_1.default.balanceOf(address);
            this.allNftDisplay.empty().appendText(String(balance.toNumber()));
            const remainingTimeToClaim = await SupernovaRewardDistributor_1.default.remainingTimeToClaim(address);
            this.blockDisplay.empty().appendText(CommonUtil_1.default.displayBlockDuration(remainingTimeToClaim.toNumber()));
            const claimed = await SupernovaRewardDistributor_1.default.claimed(address);
            this.receivedDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimed))} KLAY`);
            const claimableReward = await SupernovaRewardDistributor_1.default.claimableReward(address);
            this.totalInterestDisplay.empty().appendText(`${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimableReward))} KLAY`);
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Landing;
//# sourceMappingURL=Home.js.map