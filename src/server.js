"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = require("signale");
const express_1 = __importDefault(require("express"));
const ProductRouter_1 = require("./product/infrastructure/ProductRouter");
const ProductRouter_2 = require("./movimiento/infrastructure/ProductRouter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/products", ProductRouter_1.productRouter);
app.use("/movimiento", ProductRouter_2.movimientoRouter);
const port = 3003;
const host = '0.0.0.0';
app.listen(port, host, () => {
    signale.success("Server online in port 3003");
});
