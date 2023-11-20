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
exports.CreateReactionController = void 0;
class CreateReactionController {
    constructor(createReactionUseCase) {
        this.createReactionUseCase = createReactionUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const reaction = yield this.createReactionUseCase.run(data.name, data.cantidad, data.tiempo, data.id_expe);
                if (reaction) {
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: reaction.id,
                            name: reaction.name,
                            cantidad: reaction.cantidad,
                            tiempo: reaction.tiempo,
                            id_expe: reaction.id_expe
                        },
                    });
                    console.log('Registro exitoso');
                }
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
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
exports.CreateReactionController = CreateReactionController;
