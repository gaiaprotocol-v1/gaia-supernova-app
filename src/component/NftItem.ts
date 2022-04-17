import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import GaiaSupernovaContract from "../contracts/GaiaSupernovaContract";
import ViewUtil from "../view/ViewUtil";
import Prompt from "./shared/dialogue/Prompt";
import TransferPopup from "./TransferPopup";

export default class NftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;

    private id = 0;

    constructor() {
        super(".nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("button", msg("NFT_SEND_BUTTON"), {
                click: () => new TransferPopup(async (to) => {
                    await GaiaSupernovaContract.transfer(to, this.id);
                    ViewUtil.waitTransactionAndRefresh();
                }),
            }),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }

    public delete() {
        super.delete();
    }
}
