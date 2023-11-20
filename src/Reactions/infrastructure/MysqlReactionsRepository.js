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
exports.MysqlReactionsRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Reactions_1 = require("../domain/Reactions");
class MysqlReactionsRepository {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM reactions WHERE id=?";
            const params = [id];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                const reaction = result[0][0];
                return new Reactions_1.Reactions(reaction.id, reaction.name, reaction.cantidad, reaction.tiempo, reaction.id_expe);
            }
            catch (error) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM reactions";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataReactions = Object.values(JSON.parse(JSON.stringify(data)));
                console.log(dataReactions);
                return dataReactions.map((Reaction) => new Reactions_1.Reactions(Reaction.id, Reaction.name, Reaction.cantidad, Reaction.tiempo, Reaction.id_expe));
            }
            catch (error) {
                return null;
            }
        });
    }
    createReaction(name, cantidad, tiempo, id_expe) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO reactions (name, cantidad, tiempo, id_expe) VALUES (?, ?, ?, ?)";
            const params = [name, cantidad, tiempo, id_expe];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Reactions_1.Reactions(result.insertId, name, cantidad, tiempo, id_expe);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlReactionsRepository = MysqlReactionsRepository;
