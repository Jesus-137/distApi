"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactionsRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
exports.reactionsRouter = express_1.default.Router();
exports.reactionsRouter.get("/getAll", dependencies_2.getAllController.run.bind(dependencies_2.getAllController));
exports.reactionsRouter.get("/:id", dependencies_3.getByIdReactionController.run.bind(dependencies_3.getByIdReactionController));
exports.reactionsRouter.post("/crear", dependencies_1.createReactionController.run.bind(dependencies_1.createReactionController));
