import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(createAuthDto: CreateAuthDto): Promise<{
        name: string;
        email: string;
        isAdmin: boolean;
        id: number;
        report_mbl_code: import("../report/entities/report.entity").ReportEntity;
    }>;
    singin(createAuthDto: CreateAuthDto): Promise<{
        token: string;
        id: number;
        name: string;
        email: string;
        isAdmin: boolean;
        report_mbl_code: import("../report/entities/report.entity").ReportEntity;
    }>;
}
