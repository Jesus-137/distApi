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
    constructor(getAllUseCase, createMediaController) {
        this.getAllUseCase = getAllUseCase;
        this.createMediaController = createMediaController;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const createMedia = yield this.createMediaController.run(id);
                if (createMedia == 1) {
                    const medias = yield this.getAllUseCase.run();
                    if (medias)
                        res.status(200).send({
                            status: 'success',
                            data: medias.map((media) => {
                                return {
                                    id: media.id,
                                    id_user: media.id_user,
                                    co2: media.co2,
                                    ch4: media.ch4,
                                    ph: media.ph,
                                    conductividad: media.conductividad
                                };
                            }),
                        });
                    else
                        res.status(400).send({
                            status: "error",
                            msn: "Ocurrio algún problema",
                        });
                }
                else if (createMedia == 0) {
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrio algún problema con el guardado",
                    });
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
