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
exports.MysqlUsersRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Users_1 = require("../domain/Users");
class MysqlUsersRepository {
    login(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE userName=? and password=?";
            const params = [userName, password];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                const user = result[0][0];
                console.log(user);
                return user;
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE id=?";
            const params = [id];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                const user = result[0][0];
                console.log(user);
                return new Users_1.Users(user.id, user.username, user.password, user.correo);
            }
            catch (error) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));
                return dataUsers.map((user) => new Users_1.Users(user.id, user.username, user.password, user.correo));
            }
            catch (error) {
                return null;
            }
        });
    }
    createUser(userName, password, correo) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO users (userName, password, correo) VALUES (?, ?, ?)";
            const params = [userName, password, correo];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Users_1.Users(result.insertId, userName, password, correo);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlUsersRepository = MysqlUsersRepository;
