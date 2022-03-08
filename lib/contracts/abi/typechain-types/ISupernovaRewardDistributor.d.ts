import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISupernovaRewardDistributorInterface extends utils.Interface {
    contractName: "ISupernovaRewardDistributor";
    functions: {
        "MULTIPLIER()": FunctionFragment;
        "claimInterval()": FunctionFragment;
        "claim(address)": FunctionFragment;
        "distributionStarted()": FunctionFragment;
        "remainingTimeToClaim(address)": FunctionFragment;
        "lastKlayBalance()": FunctionFragment;
        "devFund()": FunctionFragment;
        "beforeSupernovaTransfer(address,address,uint256,uint256)": FunctionFragment;
        "supernova()": FunctionFragment;
        "unclaimed(address)": FunctionFragment;
        "rewardDebt(address)": FunctionFragment;
        "accRewardPerShare()": FunctionFragment;
        "update()": FunctionFragment;
        "claimed(address)": FunctionFragment;
        "totalDistribution()": FunctionFragment;
        "claimableReward(address)": FunctionFragment;
        "lastClaimedTime(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimInterval", values?: undefined): string;
    encodeFunctionData(functionFragment: "claim", values: [string]): string;
    encodeFunctionData(functionFragment: "distributionStarted", values?: undefined): string;
    encodeFunctionData(functionFragment: "remainingTimeToClaim", values: [string]): string;
    encodeFunctionData(functionFragment: "lastKlayBalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "beforeSupernovaTransfer", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "unclaimed", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "accRewardPerShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "update", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimed", values: [string]): string;
    encodeFunctionData(functionFragment: "totalDistribution", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimableReward", values: [string]): string;
    encodeFunctionData(functionFragment: "lastClaimedTime", values: [string]): string;
    decodeFunctionResult(functionFragment: "MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimInterval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributionStarted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingTimeToClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastKlayBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeSupernovaTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unclaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accRewardPerShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastClaimedTime", data: BytesLike): Result;
    events: {
        "UpdateDevFund(address)": EventFragment;
        "UpdateClaimInterval(uint256)": EventFragment;
        "StartDistribution()": EventFragment;
        "Distribute(uint256)": EventFragment;
        "Claim(address,uint256)": EventFragment;
        "DisclaimReward(address,uint256)": EventFragment;
        "UpdateUnclaimed(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateClaimInterval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StartDistribution"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisclaimReward"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateUnclaimed"): EventFragment;
}
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export declare type UpdateClaimIntervalEvent = TypedEvent<[
    BigNumber
], {
    newInterval: BigNumber;
}>;
export declare type UpdateClaimIntervalEventFilter = TypedEventFilter<UpdateClaimIntervalEvent>;
export declare type StartDistributionEvent = TypedEvent<[], {}>;
export declare type StartDistributionEventFilter = TypedEventFilter<StartDistributionEvent>;
export declare type DistributeEvent = TypedEvent<[BigNumber], {
    amount: BigNumber;
}>;
export declare type DistributeEventFilter = TypedEventFilter<DistributeEvent>;
export declare type ClaimEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export declare type DisclaimRewardEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type DisclaimRewardEventFilter = TypedEventFilter<DisclaimRewardEvent>;
export declare type UpdateUnclaimedEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    amount: BigNumber;
}>;
export declare type UpdateUnclaimedEventFilter = TypedEventFilter<UpdateUnclaimedEvent>;
export interface ISupernovaRewardDistributor extends BaseContract {
    contractName: "ISupernovaRewardDistributor";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISupernovaRewardDistributorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;
        claimInterval(overrides?: CallOverrides): Promise<[BigNumber]>;
        claim(user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        distributionStarted(overrides?: CallOverrides): Promise<[boolean]>;
        remainingTimeToClaim(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        lastKlayBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        beforeSupernovaTransfer(from: string, to: string, fromLastBalance: BigNumberish, toLastBalance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supernova(overrides?: CallOverrides): Promise<[string]>;
        unclaimed(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _unclaimedReward: BigNumber;
            _rewardDebt: BigNumber;
        }>;
        rewardDebt(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        accRewardPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimed(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDistribution(overrides?: CallOverrides): Promise<[BigNumber]>;
        claimableReward(user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            reward: BigNumber;
        }>;
        lastClaimedTime(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
    claimInterval(overrides?: CallOverrides): Promise<BigNumber>;
    claim(user: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    distributionStarted(overrides?: CallOverrides): Promise<boolean>;
    remainingTimeToClaim(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    lastKlayBalance(overrides?: CallOverrides): Promise<BigNumber>;
    devFund(overrides?: CallOverrides): Promise<string>;
    beforeSupernovaTransfer(from: string, to: string, fromLastBalance: BigNumberish, toLastBalance: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supernova(overrides?: CallOverrides): Promise<string>;
    unclaimed(user: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        _unclaimedReward: BigNumber;
        _rewardDebt: BigNumber;
    }>;
    rewardDebt(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;
    update(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimed(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalDistribution(overrides?: CallOverrides): Promise<BigNumber>;
    claimableReward(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    lastClaimedTime(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        claimInterval(overrides?: CallOverrides): Promise<BigNumber>;
        claim(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        distributionStarted(overrides?: CallOverrides): Promise<boolean>;
        remainingTimeToClaim(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastKlayBalance(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<string>;
        beforeSupernovaTransfer(from: string, to: string, fromLastBalance: BigNumberish, toLastBalance: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supernova(overrides?: CallOverrides): Promise<string>;
        unclaimed(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _unclaimedReward: BigNumber;
            _rewardDebt: BigNumber;
        }>;
        rewardDebt(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;
        update(overrides?: CallOverrides): Promise<void>;
        claimed(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        claimableReward(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastClaimedTime(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "UpdateClaimInterval(uint256)"(newInterval?: null): UpdateClaimIntervalEventFilter;
        UpdateClaimInterval(newInterval?: null): UpdateClaimIntervalEventFilter;
        "StartDistribution()"(): StartDistributionEventFilter;
        StartDistribution(): StartDistributionEventFilter;
        "Distribute(uint256)"(amount?: null): DistributeEventFilter;
        Distribute(amount?: null): DistributeEventFilter;
        "Claim(address,uint256)"(user?: string | null, amount?: null): ClaimEventFilter;
        Claim(user?: string | null, amount?: null): ClaimEventFilter;
        "DisclaimReward(address,uint256)"(user?: string | null, amount?: null): DisclaimRewardEventFilter;
        DisclaimReward(user?: string | null, amount?: null): DisclaimRewardEventFilter;
        "UpdateUnclaimed(address,uint256)"(user?: string | null, amount?: null): UpdateUnclaimedEventFilter;
        UpdateUnclaimed(user?: string | null, amount?: null): UpdateUnclaimedEventFilter;
    };
    estimateGas: {
        MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        claimInterval(overrides?: CallOverrides): Promise<BigNumber>;
        claim(user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        distributionStarted(overrides?: CallOverrides): Promise<BigNumber>;
        remainingTimeToClaim(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastKlayBalance(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        beforeSupernovaTransfer(from: string, to: string, fromLastBalance: BigNumberish, toLastBalance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supernova(overrides?: CallOverrides): Promise<BigNumber>;
        unclaimed(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardDebt(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        accRewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimed(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalDistribution(overrides?: CallOverrides): Promise<BigNumber>;
        claimableReward(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastClaimedTime(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(user: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        distributionStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remainingTimeToClaim(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastKlayBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeSupernovaTransfer(from: string, to: string, fromLastBalance: BigNumberish, toLastBalance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unclaimed(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardDebt(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accRewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        update(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimed(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimableReward(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastClaimedTime(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISupernovaRewardDistributor.d.ts.map