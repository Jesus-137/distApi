"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIdPorcentajeController = exports.getAllController = exports.createPorcentajeController = exports.getByIdPorcentajeUseCase = exports.getAllUseCase = exports.createPorcentajeUseCase = exports.mysqlReactionsRepository = void 0;
const MysqlExpeRepository_1 = require("./MysqlExpeRepository");
const CreateExpeUseCase_1 = require("../application/CreateExpeUseCase");
const GetByIdExpeUseCase_1 = require("../application/GetByIdExpeUseCase");
const GetAllUseCase_1 = require("../application/GetAllUseCase");
const CreateExpeController_1 = require("./controllers/CreateExpeController");
const GetAllController_1 = require("./controllers/GetAllController");
const GetByIdExpeController_1 = require("./controllers/GetByIdExpeController");
exports.mysqlReactionsRepository = new MysqlExpeRepository_1.MysqlPorcentajeRepository();
exports.createPorcentajeUseCase = new CreateExpeUseCase_1.CreateExpeUseCase(exports.mysqlReactionsRepository);
exports.getAllUseCase = new GetAllUseCase_1.GetAllUseCase(exports.mysqlReactionsRepository);
exports.getByIdPorcentajeUseCase = new GetByIdExpeUseCase_1.GetByIdExpeUseCase(exports.mysqlReactionsRepository);
exports.createPorcentajeController = new CreateExpeController_1.CreateExpeController(exports.createPorcentajeUseCase);
exports.getAllController = new GetAllController_1.GetAllController(exports.getAllUseCase);
exports.getByIdPorcentajeController = new GetByIdExpeController_1.GetByIdExpeController(exports.getByIdPorcentajeUseCase);
