"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(message) {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
}
exports.Logger = Logger;
