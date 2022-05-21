"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.send('Hi! This is my second express server');
});
app.listen('8000', () => {
    console.log(`
    ##############################
       SERVER LISTENING TO 8000
    ##############################`);
});
//# sourceMappingURL=index.js.map