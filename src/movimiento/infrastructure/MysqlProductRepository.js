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
exports.MysqlMovimientoRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Esp32_1 = require("../domain/Esp32");
const Movimiento_1 = require("../domain/Movimiento");
class MysqlMovimientoRepository {
    getNameEsp32() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM movimientos";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const esp32 = Object.values(JSON.parse(JSON.stringify(data)));
                return esp32.map((esp) => new Movimiento_1.movimiento(esp.id, esp.name_name_esp32, esp.id_user, esp.hora, esp.fecha, esp.humedad, esp.temperatura));
            }
            catch (error) {
                return null;
            }
        });
    }
    getIdUser(id_esp32) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT id FROM users WHERE name_name_esp32=?";
            const params = [id_esp32];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                estar dentro de un bloque try/catch si hay error se captura en el catch */
                return result[0].id;
            }
            catch (error) {
                return 0;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM esp32";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataMovimiento = Object.values(JSON.parse(JSON.stringify(data)));
                return dataMovimiento.map((movimientos) => new Esp32_1.Esp32(movimientos.name_esp32, movimientos.folio_esp32));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM movimientos WHERE id=?";
            const params = [userId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Movimiento_1.movimiento(result[0].id, result[0].id_esp32, result[0].id_user, result[0].hora, result[0].fecha, result[0].humedad, result[0].temperatura);
            }
            catch (error) {
                return null;
            }
        });
    }
    createMovimiento(id_esp32, id_user, hora, fecha, humedad, temperatura) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO movimientos (name_name_esp32, id_user, hora, fecha, humedad, temperatura) VALUES (?, ?, ?, ?, ?, ?)";
            const params = [id_esp32, id_user, hora, fecha, humedad, temperatura];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Movimiento_1.movimiento(result.insertId, id_esp32, id_user, hora, fecha, humedad, temperatura);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlMovimientoRepository = MysqlMovimientoRepository;
