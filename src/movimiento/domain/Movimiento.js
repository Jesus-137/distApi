"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimiento = void 0;
class movimiento {
    constructor(id, id_esp32, id_user, hora, fecha, humedad, temperatura) {
        this.id = id;
        this.id_esp32 = id_esp32;
        this.id_user = id_user;
        this.hora = hora;
        this.fecha = fecha;
        this.humedad = humedad;
        this.temperatura = temperatura;
    }
}
exports.movimiento = movimiento;
