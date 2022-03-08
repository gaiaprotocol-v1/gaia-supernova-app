/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37Holder, KIP37HolderInterface } from "../KIP37Holder";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256[]",
      },
      {
        name: "",
        type: "uint256[]",
      },
      {
        name: "",
        type: "bytes",
      },
    ],
    name: "onKIP37BatchReceived",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "bytes",
      },
    ],
    name: "onKIP37Received",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405261001a6301ffc9a760e01b61004f60201b60201c565b61004a7f7cc2d0170000000000000000000000000000000000000000000000000000000061004f602090811b901c565b61011d565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b61039b8061012c6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a7146100465780639b49e33214610081578063e78b33251461025f575b600080fd5b61006d6004803603602081101561005c57600080fd5b50356001600160e01b031916610328565b604080519115158252519081900360200190f35b610242600480360360a081101561009757600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156100ca57600080fd5b8201836020820111156100dc57600080fd5b803590602001918460208302840111600160201b831117156100fd57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561014c57600080fd5b82018360208201111561015e57600080fd5b803590602001918460208302840111600160201b8311171561017f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101ce57600080fd5b8201836020820111156101e057600080fd5b803590602001918460018302840111600160201b8311171561020157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610347945050505050565b604080516001600160e01b03199092168252519081900360200190f35b610242600480360360a081101561027557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156102b457600080fd5b8201836020820111156102c657600080fd5b803590602001918460018302840111600160201b831117156102e757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061035b945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b600160e11b634da4f1990295945050505050565b600160e01b63e78b3325029594505050505056fea165627a7a723058202c66b3842c531ee822b5b40c9ede7e990097e95b12f3ddae3ba35049be83fd3d0029";

type KIP37HolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP37HolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP37Holder__factory extends ContractFactory {
  constructor(...args: KIP37HolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "KIP37Holder";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP37Holder> {
    return super.deploy(overrides || {}) as Promise<KIP37Holder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KIP37Holder {
    return super.attach(address) as KIP37Holder;
  }
  connect(signer: Signer): KIP37Holder__factory {
    return super.connect(signer) as KIP37Holder__factory;
  }
  static readonly contractName: "KIP37Holder";
  public readonly contractName: "KIP37Holder";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP37HolderInterface {
    return new utils.Interface(_abi) as KIP37HolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP37Holder {
    return new Contract(address, _abi, signerOrProvider) as KIP37Holder;
  }
}
