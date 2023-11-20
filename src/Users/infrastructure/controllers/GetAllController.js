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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GetAllController {
    constructor(getAllUseCase) {
        this.getAllUseCase = getAllUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers['authorization'];
            try {
                if (!token) {
                    return res.status(403).json({ error: 'Acceso denegado' });
                }
                else {
                    const valido = jsonwebtoken_1.default.verify(token, 'tu_secreto_secreto', (err) => {
                        if (err) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                    if (valido) {
                        const users = yield this.getAllUseCase.run();
                        if (users)
                            res.status(200).send(users.map((user) => {
                                return {
                                    id: user.id,
                                    userName: user.userName,
                                    password: user.password,
                                    correo: user.correo
                                };
                            }));
                        else
                            res.status(400).send({
                                status: "error",
                                msn: "Ocurrio algún problema",
                            });
                    }
                    else {
                        res.status(401).json({ error: 'Token no válido' });
                    }
                }
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.GetAllController = GetAllController;
