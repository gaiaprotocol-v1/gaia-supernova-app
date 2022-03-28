"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const GaiaSupernovaContract_1 = __importDefault(require("../contracts/GaiaSupernovaContract"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const Prompt_1 = __importDefault(require("./shared/dialogue/Prompt"));
class NftItem extends skynode_1.DomNode {
    constructor() {
        super(".nft-item");
        this.id = 0;
        this.append(this.imageDisplay = (0, skynode_1.el)("img"), this.nameDisplay = (0, skynode_1.el)("h3"), (0, skynode_1.el)("button", (0, msg_js_1.default)("NFT_SEND_BUTTON"), {
            click: () => new Prompt_1.default((0, msg_js_1.default)("SEND_PROMPT_TITLE"), (0, msg_js_1.default)("SEND_PROMPT_DESC"), (0, msg_js_1.default)("SEND_PROMPT_BUTTON"), async (to) => {
                await GaiaSupernovaContract_1.default.transfer(to, this.id);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }, (0, msg_js_1.default)("SEND_PROMPT_INPUT"), (0, msg_js_1.default)("SEND_PROMPT_WARNING_DESC")),
        }));
    }
    init(id) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }
    delete() {
        super.delete();
    }
}
exports.default = NftItem;
//# sourceMappingURL=NftItem.js.map