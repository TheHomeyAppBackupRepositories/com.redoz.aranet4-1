"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homey_1 = __importDefault(require("homey"));
class Aranet4App extends homey_1.default.App {
    /**
     * onInit is called when the app is initialized.
     */
    async onInit() {
        this.log('Aranet4App is initalized');
    }
}
module.exports = Aranet4App;
