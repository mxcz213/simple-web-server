"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(function (req, res) {
    res.write('hello');
    res.end();
}).listen(9999);
console.log('server listen on 9999');
