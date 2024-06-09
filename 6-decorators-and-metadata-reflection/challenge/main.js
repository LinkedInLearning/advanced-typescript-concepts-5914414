"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const productManagement_1 = __importDefault(require("./productManagement"));
const pm = new productManagement_1.default();
pm.createProduct("Laptop", 1200); // Should log and then execute if authorized
pm.deleteProduct("Laptop"); // Should just log the call
