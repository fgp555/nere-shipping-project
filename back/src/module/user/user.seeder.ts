import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthController } from '../auth/auth.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeederService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    private readonly userService: AuthController,
  ) {
    this.seed();
  }

  async seed() {
    const userDemo = {
      name: 'Admin Demo',
      email: 'admin@gmail.com',
      password: 'P4ssWord@123',
      isAdmin: true,
    };

    const existUser = await this.userRepository.find();
    if (existUser.length == 0) {
      await this.userService.signup(userDemo);
      console.log('seeder user successfully');
    } else {
      console.log('user already exist');
    }
  }
}
