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
exports.CreateDesviacionController = void 0;
class CreateDesviacionController {
    constructor(createDesviacionUseCase, mysqlReactionsRepo, mysqlMediaRepo) {
        this.createDesviacionUseCase = createDesviacionUseCase;
        this.mysqlReactionsRepo = mysqlReactionsRepo;
        this.mysqlMediaRepo = mysqlMediaRepo;
    }
    run(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reaction = yield this.mysqlReactionsRepo.getAll();
                const media = yield this.mysqlMediaRepo.getById(id_user);
                let co2 = 0, nCo2 = 0, ch4 = 0, nCh4 = 0, ph = 0, nPh = 0, conductividad = 0, nConductividad = 0;
                if (reaction) {
                    if (media) {
                        for (let i = 0; i < reaction.length; i++) {
                            for (let j = 0; j < media.length; j++) {
                                if (reaction[i].name == 'co2') {
                                    co2 += Math.pow(reaction[i].cantidad - media[j].co2, 2);
                                    nCo2++;
                                }
                                else if (reaction[i].name == 'ch4') {
                                    ch4 += Math.pow(reaction[i].cantidad - media[j].ch4, 2);
                                    nCh4++;
                                }
                                else if (reaction[i].name == 'ph') {
                                    ph += Math.pow(reaction[i].cantidad - media[j].ph, 2);
                                    nPh++;
                                }
                                else if (reaction[i].name == 'conductividad') {
                                    conductividad += Math.pow(reaction[i].cantidad - media[j].conductividad, 2);
                                    nConductividad++;
                                }
                            }
                        }
                        const mco2 = Math.sqrt(co2 / (nCo2 - 1));
                        const mch4 = Math.sqrt(ch4 / (nCh4 - 1));
                        const mph = Math.sqrt(ph / (nPh - 1));
                        const mconductividad = Math.sqrt(conductividad / (nConductividad - 1));
                        const desviacion = yield this.createDesviacionUseCase.run(id_user, mco2, mch4, mph, mconductividad);
                        if (desviacion) {
                            console.log('Registro exitoso');
                            return 1;
                        }
                    }
                    else
                        return 0;
                }
                else
                    return 0;
            }
            catch (error) {
                return -1;
            }
        });
    }
}
exports.CreateDesviacionController = CreateDesviacionController;
