"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raspRouters = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
exports.raspRouters = express_1.default.Router();
exports.raspRouters.get('/getAll', dependencies_2.getAllController.run.bind(dependencies_2.getAllController));
exports.raspRouters.get('/:id', dependencies_3.getByIdController.run.bind(dependencies_3.getByIdController));
exports.raspRouters.post('/crear', dependencies_1.createRaspController.run.bind(dependencies_1.createRaspController));
