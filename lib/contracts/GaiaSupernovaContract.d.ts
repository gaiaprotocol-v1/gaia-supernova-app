import { BigNumber } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class GaiaSupernovaContract extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: GaiaSupernovaContract;
export default _default;
//# sourceMappingURL=GaiaSupernovaContract.d.ts.map