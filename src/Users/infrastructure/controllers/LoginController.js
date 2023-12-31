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
exports.LoginController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const user = yield this.loginUseCase.run(data.userName, data.password);
                if (user) {
                    const userName = data.userName;
                    const token = jsonwebtoken_1.default.sign({ userName }, 'tu_secreto_secreto', { expiresIn: '1h' });
                    res.json({ token });
                }
                else
                    res.status(400).send({
                        status: "error",
                        msn: "Nombre de usario o contraceña incorectos",
                    });
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
exports.LoginController = LoginController;
