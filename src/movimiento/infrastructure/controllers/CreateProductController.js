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
exports.CreateProductController = void 0;
class CreateProductController {
    constructor(createMovimientoUseCase, mysqlRepo) {
        this.createMovimientoUseCase = createMovimientoUseCase;
        this.mysqlRepo = mysqlRepo;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const idUser = yield this.mysqlRepo.getIdUser(data.nombre);
                const movimiento = yield this.createMovimientoUseCase.run(data.nombre, idUser, data.hora, data.fecha, data.humedad, data.temperatura);
                if (movimiento) {
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: movimiento.id,
                            id_esp32: movimiento.id_esp32,
                            id_user: movimiento.id_user,
                            hora: movimiento.hora,
                            fecha: movimiento.fecha,
                            humedad: movimiento.humedad,
                            temperatura: movimiento.temperatura
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
exports.CreateProductController = CreateProductController;
