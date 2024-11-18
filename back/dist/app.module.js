"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("./config/typeorm");
const t4_unstuffing_module_1 = require("./module/t4_unstuffing/t4_unstuffing.module");
const report_module_1 = require("./module/report/report.module");
const t5_damage_module_1 = require("./module/t5_damage/t5_damage.module");
const html_pdf_module_1 = require("./module/html-pdf/html-pdf.module");
const info_module_1 = require("./info/info.module");
const user_module_1 = require("./module/user/user.module");
const auth_module_1 = require("./module/auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_2.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('typeorm'),
            }),
            jwt_1.JwtModule.register({
                global: true,
                signOptions: { expiresIn: '10d' },
                secret: process.env.JWT_SECRET,
            }),
            t4_unstuffing_module_1.T4UnstuffingModule,
            report_module_1.ReportModule,
            t5_damage_module_1.T5DamageModule,
            html_pdf_module_1.HtmlPdfModule,
            info_module_1.InfoModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map