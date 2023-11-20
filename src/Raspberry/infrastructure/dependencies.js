"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIdController = exports.getAllController = exports.createRaspController = exports.getByIdUseCase = exports.getAllUseCase = exports.createRaspUseCase = exports.mysqlRaspRepo = void 0;
const MysqlRaspRepository_1 = require("./MysqlRaspRepository");
const CreateRaspUseCase_1 = require("../application/CreateRaspUseCase");
const GetAllUseCase_1 = require("../application/GetAllUseCase");
const GetByIdUseCase_1 = require("../application/GetByIdUseCase");
const CreateRaspController_1 = require("./controlers/CreateRaspController");
const GetAllController_1 = require("./controlers/GetAllController");
const GetByIdController_1 = require("./controlers/GetByIdController");
exports.mysqlRaspRepo = new MysqlRaspRepository_1.MysqlRaspRepository();
exports.createRaspUseCase = new CreateRaspUseCase_1.CreateRaspUseCase(exports.mysqlRaspRepo);
exports.getAllUseCase = new GetAllUseCase_1.GetAllUseCase(exports.mysqlRaspRepo);
exports.getByIdUseCase = new GetByIdUseCase_1.GetByIdUseCase(exports.mysqlRaspRepo);
exports.createRaspController = new CreateRaspController_1.CreateRaspController(exports.createRaspUseCase);
exports.getAllController = new GetAllController_1.GetAllController(exports.getAllUseCase);
exports.getByIdController = new GetByIdController_1.GetByIdController(exports.getByIdUseCase);