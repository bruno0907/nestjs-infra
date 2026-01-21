import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(dto: LoginDto) {
    const payload = { sub: 1, email: dto.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
