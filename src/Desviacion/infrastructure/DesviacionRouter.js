"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.desviacionRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
exports.desviacionRouter = express_1.default.Router();
exports.desviacionRouter.get("/getAll/:id", dependencies_1.getAllController.run.bind(dependencies_1.getAllController));
exports.desviacionRouter.get("/:id", dependencies_2.getByIdDesviacionController.run.bind(dependencies_2.getByIdDesviacionController));
