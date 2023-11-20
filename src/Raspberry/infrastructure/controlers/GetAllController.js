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
exports.GetAllController = void 0;
class GetAllController {
    constructor(getAllUseCase) {
        this.getAllUseCase = getAllUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rasps = yield this.getAllUseCase.run();
                if (rasps) {
                    res.status(201).send(rasps.map((rasp) => {
                        return {
                            id: rasp.id,
                            modelo: rasp.modelo
                        };
                    }));
                }
                else
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurio un problema"
                    });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurio un error",
                    msn: error
                });
            }
        });
    }
}
exports.GetAllController = GetAllController;
