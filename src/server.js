"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = require("signale");
const express_1 = __importDefault(require("express"));
const ReactionsRouter_1 = require("./Reactions/infrastructure/ReactionsRouter");
const UsersRouter_1 = require("./Users/infrastructure/UsersRouter");
const ExpeRouter_1 = require("./Experimento/infrastructure/ExpeRouter");
const RaspRouters_1 = require("./Raspberry/infrastructure/RaspRouters");
const MediaRouter_1 = require("./Media/infrastructure/MediaRouter");
const DesviacionRouter_1 = require("./Desviacion/infrastructure/DesviacionRouter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/user", UsersRouter_1.usersRouter);
app.use("/reactions", ReactionsRouter_1.reactionsRouter);
app.use("/expe", ExpeRouter_1.expeRouter);
app.use("/rasp", RaspRouters_1.raspRouters);
app.use("/media", MediaRouter_1.mediaRouter);
app.use("/desviacion", DesviacionRouter_1.desviacionRouter);
const port = 3003;
const host = '0.0.0.0';
app.listen(port, host, () => {
    signale.success("Server online in port 3003");
});
