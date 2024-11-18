import { AuthController } from '../auth/auth.controller';
export declare class UserSeederService {
    private readonly userService;
    constructor(userService: AuthController);
    seed(): Promise<void>;
}
