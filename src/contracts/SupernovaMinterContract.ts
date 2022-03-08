import Config from "../Config";
import SupernovaRewardDistributorArtifact from "./abi/artifacts/contracts/SupernovaRewardDistributor.sol/SupernovaRewardDistributor.json";
import Contract from "./Contract";

class SupernovaRewardDistributor extends Contract {

    constructor() {
        super(Config.contracts.SupernovaRewardDistributor, SupernovaRewardDistributorArtifact.abi);
    }
}

export default new SupernovaRewardDistributor();
