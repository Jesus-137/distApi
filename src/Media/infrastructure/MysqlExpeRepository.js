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
exports.MysqlMediaRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Media_1 = require("../domain/Media");
class MysqlMediaRepository {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM media WHERE id_user=?";
            try {
                const [data] = yield (0, mysql_1.query)(sql, [id]);
                const dataReactions = Object.values(JSON.parse(JSON.stringify(data)));
                console.log(dataReactions);
                return dataReactions.map((Reaction) => new Media_1.Media(Reaction.id, Reaction.id_user, Reaction.co2, Reaction.ch4, Reaction.ph, Reaction.conductividad));
            }
            catch (error) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM media";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataMedia = Object.values(JSON.parse(JSON.stringify(data)));
                return dataMedia.map((media) => new Media_1.Media(media.id, media.id_user, media.co2, media.ch4, media.ph, media.conductividad));
            }
            catch (error) {
                return null;
            }
        });
    }
    createMedia(id_user, co2, ch4, ph, conductividad) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO media (id_user, co2, ch4, ph, conductividad) VALUES (?, ?, ?, ?, ?)";
            const params = [id_user, co2, ch4, ph, conductividad];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new Media_1.Media(result.insertId, id_user, co2, ch4, ph, conductividad);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlMediaRepository = MysqlMediaRepository;
