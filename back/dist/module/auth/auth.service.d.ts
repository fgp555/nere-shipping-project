import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    signup(createAuthDto: CreateAuthDto): Promise<import("../user/dto/create-user.dto").CreateUserDto & import("../user/entities/user.entity").UserEntity>;
    singin(createAuthDto: CreateAuthDto): Promise<import("../user/entities/user.entity").UserEntity>;
}
