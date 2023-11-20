"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlPorcentajeRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Expe_1 = require("../domain/Expe");
class MysqlPorcentajeRepository {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM experimento WHERE id=?";
            const params = [id];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                const expe = result[0][0];
                return new Expe_1.Expe(expe.id, expe.id_user, expe.id_rasp);
            }
            catch (error) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM experimento";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataExpe = Object.values(JSON.parse(JSON.stringify(data)));
                return dataExpe.map((expe) => new Expe_1.Expe(expe.id, expe.id_user, expe.id_rasp));
            }
            catch (error) {
                return null;
            }
        });
    }
    createExpe(id_user, id_rasp) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO experimento (id_user, id_rasp) VALUES (?, ?)";
            const params = [id_user, id_rasp];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Expe_1.Expe(result.insertId, id_user, id_rasp);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlPorcentajeRepository = MysqlPorcentajeRepository;
