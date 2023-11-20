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
exports.MysqlDesviacionRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Desviacion_1 = require("../domain/Desviacion");
class MysqlDesviacionRepository {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM desviacion WHERE id=?";
            const params = [id];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                const media = result[0][0];
                return new Desviacion_1.Desviacion(media.id, media.id_user, media.co2, media.ch4, media.ph, media.conductividad);
            }
            catch (error) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM desviacion";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataMedia = Object.values(JSON.parse(JSON.stringify(data)));
                return dataMedia.map((media) => new Desviacion_1.Desviacion(media.id, media.id_user, media.co2, media.ch4, media.ph, media.conductividad));
            }
            catch (error) {
                return null;
            }
        });
    }
    createMedia(id_user, co2, ch4, ph, conductividad) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO desviacion (id_user, co2, ch4, ph, conductividad) VALUES (?, ?, ?, ?, ?)";
            const params = [id_user, co2, ch4, ph, conductividad];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Desviacion_1.Desviacion(result.insertId, id_user, co2, ch4, ph, conductividad);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlDesviacionRepository = MysqlDesviacionRepository;
