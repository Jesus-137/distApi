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
exports.MysqlRaspRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Raspberry_1 = require("../domain/Raspberry");
class MysqlRaspRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM raspberrys";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataRasp = Object(JSON.parse(JSON.stringify(data)));
                return dataRasp.map((rasp) => {
                    return new Raspberry_1.Raspberry(rasp.id, rasp.modelo);
                });
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM raspberrys WHERE id=?";
            const params = [id];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                const rasp = result[0][0];
                return new Raspberry_1.Raspberry(rasp.id, rasp.modelo);
            }
            catch (error) {
                return null;
            }
        });
    }
    createRasp(modelo) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO raspberrys (modelo) VALUES (?)";
            const params = [modelo];
            try {
                const [rasp] = yield (0, mysql_1.query)(sql, params);
                return new Raspberry_1.Raspberry(rasp.insertId, modelo);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlRaspRepository = MysqlRaspRepository;
