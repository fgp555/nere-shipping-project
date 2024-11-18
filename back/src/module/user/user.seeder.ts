import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthController } from '../auth/auth.controller';

@Injectable()
export class UserSeederService {
  constructor(private readonly userService: AuthController) {
    this.seed();
  }

  async seed() {
    const userDemo = {
      name: 'user',
      email: 'admin@gmail.com',
      password: 'P4ssWord@123',
      isAdmin: true,
    };
    await this.userService.signup(userDemo);
    console.log('seeder user successfully');
  }
}
