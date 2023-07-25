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
exports.MysqlProductRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Product_1 = require("../domain/Product");
class MysqlProductRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));
                return dataProducts.map((product) => new Product_1.Product(product.id, product.name, product.user_name, product.password, product.phone, product.name_name_esp32));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE id=?";
            const params = [userId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Product_1.Product(result[0].id, result[0].name, result[0].user_name, result[0].password, result[0].phone, result[0].id_esp32);
            }
            catch (error) {
                return null;
            }
        });
    }
    createProduct(name, user_name, password, phone, id_esp32) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO users (name, user_name, password, phone, name_name_esp32) VALUES (?, ?, ?, ?, ?)";
            const params = [name, user_name, password, phone, id_esp32];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Product_1.Product(result.insertId, name, user_name, password, phone, id_esp32);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlProductRepository = MysqlProductRepository;
