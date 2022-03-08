import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class SupernovaRewardDistributor extends Contract {
    constructor();
    totalDistribution(): Promise<BigNumber>;
    remainingTimeToClaim(user: string): Promise<BigNumber>;
    claimed(user: string): Promise<BigNumber>;
    claimableReward(user: string): Promise<BigNumber>;
    claim(user: string): Promise<void>;
}
declare const _default: SupernovaRewardDistributor;
export default _default;
//# sourceMappingURL=SupernovaRewardDistributor.d.ts.map