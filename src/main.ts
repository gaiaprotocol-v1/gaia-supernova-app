import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import CheckHolder from "./view/CheckHolder";
import Home from "./view/Home";
import Nft from "./view/Nft";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("/", Home);
    SkyRouter.route("nft", Nft);

    SkyRouter.route("checkholder", CheckHolder);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();