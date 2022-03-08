"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const aos_1 = __importDefault(require("aos"));
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const UserInfo_1 = __importDefault(require("../component/UserInfo"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
class Landing {
    constructor() {
        document.title = (0, msg_js_1.default)("TITLE");
        let select;
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("header", (0, skynode_1.el)(".nav", (0, skynode_1.el)(".logo", (0, skynode_1.el)("a", { click: () => { ViewUtil_1.default.go("/"); } }, (0, skynode_1.el)("img", { src: "/images/shared/img/img-gaia-supernova-logo.png", alt: "gaia supernova logo" }))), (0, skynode_1.el)(".right", select = (0, skynode_1.el)("select.language-select", (0, skynode_1.el)("option", "한국어 🇰🇷 ", { value: "ko" }), (0, skynode_1.el)("option", "English 🇺🇸 ", { value: "en" }), {
            change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
            },
        }), new UserInfo_1.default()))), (0, skynode_1.el)("main", (0, skynode_1.el)("section.dashboard-container", { "data-aos": "zoom-in" }, (0, skynode_1.el)("h1", (0, msg_js_1.default)("TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("DASHBOARD_DESC")), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("h3", (0, msg_js_1.default)("DASHBOARD_TITLE1")), this.allRoyaltyDisplay = (0, skynode_1.el)("p", "... KLAY")), (0, skynode_1.el)("article", (0, skynode_1.el)("header"), (0, skynode_1.el)("h3", (0, msg_js_1.default)("DASHBOARD_TITLE2")), this.nftRoyaltyDisplay = (0, skynode_1.el)("p", "... KLAY")))), (0, skynode_1.el)("section.info-container", { "data-aos": "zoom-in" }, (0, skynode_1.el)("h2", (0, msg_js_1.default)("INFO_TITLE")), (0, skynode_1.el)("h3", (0, msg_js_1.default)("INFO_DESC")), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE1")), this.allNftDisplay = (0, skynode_1.el)("p", "... NFTs")), (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE2")), this.blockDisplay = (0, skynode_1.el)("p", "{current block} / {reward block}")), (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE3")), this.receivedDisplay = (0, skynode_1.el)("p", "... KLAY")), (0, skynode_1.el)("article", (0, skynode_1.el)("h4", (0, msg_js_1.default)("INFO_TITLE4")), this.totalInterestDisplay = (0, skynode_1.el)("p", "... KLAY"))), (0, skynode_1.el)(".action-container", (0, skynode_1.el)(".warning-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-error-red.svg", alt: "warning" }), (0, skynode_1.el)("p", (0, msg_js_1.default)("WARNING_DESC"))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", (0, msg_js_1.default)("REWARD_BUTTON")), (0, skynode_1.el)("a", (0, msg_js_1.default)("OPENSEA_BUTTON"), { href: "https://opensea.io/account?search[resultModel]=ASSETS&search[sortBy]=LAST_TRANSFER_DATE&search[query]=gaia%20supernova", target: "_blank" }))))), (0, skynode_1.el)("footer", (0, skynode_1.el)(".footer-container", (0, skynode_1.el)(".sns", (0, skynode_1.el)("a.opensea", { href: "https://opensea.io/collection/gaia-kronos", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-opensea.svg" })), (0, skynode_1.el)("a.discord", { href: "https://discord.gg/gaia", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-discord.svg" })), (0, skynode_1.el)("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-twitter.svg" })), (0, skynode_1.el)("a.gitbook", { href: "https://docs.gaiakronos.com/kr/", target: "_blank" }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-notion.svg" }))), (0, skynode_1.el)(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"))))));
        this.interval = setInterval(() => this.load(), 1000);
        this.init();
        select.domElement.value = BrowserInfo_1.default.language;
    }
    async init() {
        aos_1.default.init();
    }
    async load() {
        this.blockDisplay.domElement.innerText = "{current block} / {reward block}".replace(/{current block}/, String(await Klaytn_1.default.loadBlockNumber()));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Landing;
//# sourceMappingURL=Home.js.map