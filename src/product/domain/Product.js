"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, user_name, password, phone, id_esp32) {
        this.id = id;
        this.name = name;
        this.user_name = user_name;
        this.password = password;
        this.phone = phone;
        this.id_esp32 = id_esp32;
    }
}
exports.Product = Product;
