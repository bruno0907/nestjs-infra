import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(dto: LoginDto) {
    return {
      email: dto.email,
      password: dto.password,
      sucess: true,
    };
  }
}
