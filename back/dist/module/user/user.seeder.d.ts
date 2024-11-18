import { AuthController } from '../auth/auth.controller';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserSeederService {
    private readonly userRepository;
    private readonly userService;
    constructor(userRepository: Repository<UserEntity>, userService: AuthController);
    seed(): Promise<void>;
}
