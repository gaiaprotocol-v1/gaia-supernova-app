import { BigNumber } from "ethers";
import Config from "../Config";
import GaiaSupernovaArtifact from "./abi/artifacts/contracts/GaiaSupernova.sol/GaiaSupernova.json";
import KIP17Contract from "./standard/KIP17Contract";

class GaiaSupernovaContract extends KIP17Contract {

    constructor() {
        super(Config.contracts.GaiaSupernova, GaiaSupernovaArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GaiaSupernovaContract();
