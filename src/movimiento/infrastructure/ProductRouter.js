"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientoRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
const dependencies_4 = require("./dependencies");
exports.movimientoRouter = express_1.default.Router();
exports.movimientoRouter.get("/name_esp32", dependencies_2.getAllProductController.run.bind(dependencies_2.getAllProductController));
exports.movimientoRouter.get("/:id", dependencies_3.getByIdProductController.run.bind(dependencies_3.getByIdProductController));
exports.movimientoRouter.post("/crear", dependencies_1.createProductController.run.bind(dependencies_1.createProductController));
exports.movimientoRouter.get("/", dependencies_4.getNameEsp32Controller.run.bind(dependencies_4.getNameEsp32Controller));
