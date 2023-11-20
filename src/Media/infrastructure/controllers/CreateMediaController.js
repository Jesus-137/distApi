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
exports.CreateMediaController = void 0;
class CreateMediaController {
    constructor(createMediaUseCase, mysqlReactionsRepo) {
        this.createMediaUseCase = createMediaUseCase;
        this.mysqlReactionsRepo = mysqlReactionsRepo;
    }
    run(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exp = yield this.mysqlReactionsRepo.getAll();
                console.log(exp);
                let co2 = 0, nCo2 = 0, ch4 = 0, nCh4 = 0, ph = 0, nPh = 0, conductividad = 0, nConductividad = 0;
                if (exp) {
                    for (let i = 0; i < exp.length; i++) {
                        if (exp[i].name == 'co2') {
                            co2 += exp[i].cantidad;
                            nCo2++;
                        }
                        else if (exp[i].name == 'ch4') {
                            ch4 += exp[i].cantidad;
                            nCh4++;
                        }
                        else if (exp[i].name == 'ph') {
                            ph += exp[i].cantidad;
                            nPh++;
                        }
                        else if (exp[i].name == 'conductividad') {
                            conductividad += exp[i].cantidad;
                            nConductividad++;
                        }
                    }
                    const mco2 = co2 / nCo2;
                    const mch4 = ch4 / nCh4;
                    const mph = ph / nPh;
                    const mconductividad = conductividad / nConductividad;
                    const media = yield this.createMediaUseCase.run(id_user, mco2, mch4, mph, mconductividad);
                    if (media) {
                        console.log('Registro exitoso');
                        return 1;
                    }
                }
                else
                    return 0;
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                return -1;
            }
        });
    }
}
exports.CreateMediaController = CreateMediaController;
