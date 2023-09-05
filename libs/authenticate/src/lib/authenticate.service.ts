import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticateService {
  constructor(private jwtService: JwtService) {}

  async login(user: {
    id: string;
    email: string;
  }): Promise<{ accessToken: string }> {
    const payload = {
      email: user.email,
      userId: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
