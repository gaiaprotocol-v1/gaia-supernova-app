"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const SupernovaRewardDistributor_json_1 = __importDefault(require("./abi/artifacts/contracts/SupernovaRewardDistributor.sol/SupernovaRewardDistributor.json"));
const Contract_1 = __importDefault(require("./Contract"));
class SupernovaRewardDistributor extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.SupernovaRewardDistributor, SupernovaRewardDistributor_json_1.default.abi);
    }
    async totalDistribution() {
        return ethers_1.BigNumber.from(await this.runMethod("totalDistribution"));
    }
    async remainingTimeToClaim(user) {
        return ethers_1.BigNumber.from(await this.runMethod("remainingTimeToClaim", user));
    }
    async claimed(user) {
        return ethers_1.BigNumber.from(await this.runMethod("claimed", user));
    }
    async claimableReward(user) {
        return ethers_1.BigNumber.from(await this.runMethod("claimableReward", user));
    }
    async claim(user) {
        await this.runWalletMethod("claim", user);
    }
}
exports.default = new SupernovaRewardDistributor();
//# sourceMappingURL=SupernovaRewardDistributor.js.map