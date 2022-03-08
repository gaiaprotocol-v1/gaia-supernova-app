import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISupernovaRewardDistributor, ISupernovaRewardDistributorInterface } from "../ISupernovaRewardDistributor";
export declare class ISupernovaRewardDistributor__factory {
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): ISupernovaRewardDistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISupernovaRewardDistributor;
}
//# sourceMappingURL=ISupernovaRewardDistributor__factory.d.ts.map