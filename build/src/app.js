"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotEnv = __importStar(require("dotenv"));
const routesConfig_1 = __importDefault(require("./commons/routesConfig"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8003;
dotEnv.config();
// Bodyparser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// List Cors
const allowedOrigins = ['http://localhost:3000',
    'https://ductape-frontend.vercel.app',
    'https://ductape-users.herokuapp.com',
    'https://ductape-workspaces.herokuapp.com',
    'https://ductape-apps.herokuapp.com',
    'https://ductape-actions.herokuapp.com'];
// set cors options
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(routesConfig_1.default);
mongoose_1.default.connect(process.env.DB_HOST).catch((e) => {
    console.log(e);
});
mongoose_1.default.connection.on('open', () => {
    console.log('Mongoose Connection');
});
app.listen(port, () => {
    console.log(`ductape-emails-api application is running on port ${port}.`);
});
