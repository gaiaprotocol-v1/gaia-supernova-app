import { BigNumber } from "ethers";
import Config from "../Config";
import SupernovaRewardDistributorArtifact from "./abi/artifacts/contracts/SupernovaRewardDistributor.sol/SupernovaRewardDistributor.json";
import Contract from "./Contract";

class SupernovaRewardDistributor extends Contract {

    constructor() {
        super(Config.contracts.SupernovaRewardDistributor, SupernovaRewardDistributorArtifact.abi);
    }

    public async totalDistribution(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalDistribution"));
    }

    public async remainingTimeToClaim(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("remainingTimeToClaim", user));
    }

    public async claimed(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("claimed", user));
    }

    public async claimableReward(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("claimableReward", user));
    }

    public async claim(user: string): Promise<void> {
        await this.runWalletMethod("claim", user);
    }
}

export default new SupernovaRewardDistributor();
