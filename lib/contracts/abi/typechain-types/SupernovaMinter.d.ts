import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SupernovaMinterInterface extends utils.Interface {
    contractName: "SupernovaMinter";
    functions: {
        "maxSupernovaCount()": FunctionFragment;
        "publicMint()": FunctionFragment;
        "publicSale()": FunctionFragment;
        "gaiaKronos()": FunctionFragment;
        "devFund()": FunctionFragment;
        "withdrawKlay(address)": FunctionFragment;
        "supernova()": FunctionFragment;
        "setPublicSale(bool)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "initialSale()": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "updateMaxSupernovaCount(uint256)": FunctionFragment;
        "userInitialMintingAmount(address)": FunctionFragment;
        "initialMint()": FunctionFragment;
        "supernovaPrice()": FunctionFragment;
        "setInitialSale(bool)": FunctionFragment;
        "updateDevFund(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "maxSupernovaCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "publicMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "publicSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaKronos", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawKlay", values: [string]): string;
    encodeFunctionData(functionFragment: "supernova", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPublicSale", values: [boolean]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateMaxSupernovaCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "userInitialMintingAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "initialMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "supernovaPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "setInitialSale", values: [boolean]): string;
    encodeFunctionData(functionFragment: "updateDevFund", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "maxSupernovaCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publicMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publicSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawKlay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supernova", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPublicSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMaxSupernovaCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInitialMintingAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supernovaPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInitialSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDevFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "UpdateDevFund(address)": EventFragment;
        "UpdateMaxSupernovaCount(uint256)": EventFragment;
        "SetInitialSale(bool)": EventFragment;
        "SetPublicSale(bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateMaxSupernovaCount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetInitialSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPublicSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export declare type UpdateMaxSupernovaCountEvent = TypedEvent<[
    BigNumber
], {
    newMaxCount: BigNumber;
}>;
export declare type UpdateMaxSupernovaCountEventFilter = TypedEventFilter<UpdateMaxSupernovaCountEvent>;
export declare type SetInitialSaleEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetInitialSaleEventFilter = TypedEventFilter<SetInitialSaleEvent>;
export declare type SetPublicSaleEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetPublicSaleEventFilter = TypedEventFilter<SetPublicSaleEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SupernovaMinter extends BaseContract {
    contractName: "SupernovaMinter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SupernovaMinterInterface;
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
        maxSupernovaCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        publicMint(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        publicSale(overrides?: CallOverrides): Promise<[boolean]>;
        gaiaKronos(overrides?: CallOverrides): Promise<[string]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        withdrawKlay(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supernova(overrides?: CallOverrides): Promise<[string]>;
        setPublicSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialSale(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        updateMaxSupernovaCount(newMaxCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        userInitialMintingAmount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialMint(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supernovaPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        setInitialSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    maxSupernovaCount(overrides?: CallOverrides): Promise<BigNumber>;
    publicMint(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    publicSale(overrides?: CallOverrides): Promise<boolean>;
    gaiaKronos(overrides?: CallOverrides): Promise<string>;
    devFund(overrides?: CallOverrides): Promise<string>;
    withdrawKlay(recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supernova(overrides?: CallOverrides): Promise<string>;
    setPublicSale(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialSale(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    updateMaxSupernovaCount(newMaxCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    userInitialMintingAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialMint(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supernovaPrice(overrides?: CallOverrides): Promise<BigNumber>;
    setInitialSale(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateDevFund(newDevFund: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        maxSupernovaCount(overrides?: CallOverrides): Promise<BigNumber>;
        publicMint(overrides?: CallOverrides): Promise<BigNumber>;
        publicSale(overrides?: CallOverrides): Promise<boolean>;
        gaiaKronos(overrides?: CallOverrides): Promise<string>;
        devFund(overrides?: CallOverrides): Promise<string>;
        withdrawKlay(recipient: string, overrides?: CallOverrides): Promise<void>;
        supernova(overrides?: CallOverrides): Promise<string>;
        setPublicSale(status: boolean, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        initialSale(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        updateMaxSupernovaCount(newMaxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        userInitialMintingAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialMint(overrides?: CallOverrides): Promise<BigNumber>;
        supernovaPrice(overrides?: CallOverrides): Promise<BigNumber>;
        setInitialSale(status: boolean, overrides?: CallOverrides): Promise<void>;
        updateDevFund(newDevFund: string, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "UpdateMaxSupernovaCount(uint256)"(newMaxCount?: null): UpdateMaxSupernovaCountEventFilter;
        UpdateMaxSupernovaCount(newMaxCount?: null): UpdateMaxSupernovaCountEventFilter;
        "SetInitialSale(bool)"(status?: null): SetInitialSaleEventFilter;
        SetInitialSale(status?: null): SetInitialSaleEventFilter;
        "SetPublicSale(bool)"(status?: null): SetPublicSaleEventFilter;
        SetPublicSale(status?: null): SetPublicSaleEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        maxSupernovaCount(overrides?: CallOverrides): Promise<BigNumber>;
        publicMint(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        publicSale(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawKlay(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supernova(overrides?: CallOverrides): Promise<BigNumber>;
        setPublicSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialSale(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        updateMaxSupernovaCount(newMaxCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        userInitialMintingAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialMint(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supernovaPrice(overrides?: CallOverrides): Promise<BigNumber>;
        setInitialSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        maxSupernovaCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publicMint(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        publicSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawKlay(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPublicSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateMaxSupernovaCount(newMaxCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        userInitialMintingAmount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialMint(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supernovaPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setInitialSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SupernovaMinter.d.ts.map