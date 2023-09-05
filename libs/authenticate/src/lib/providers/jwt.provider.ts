import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtProvider extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'fcamara-abc123',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.userId,
      email: payload.email,
      roles: payload.roles,
      permissions: payload.permissions,
    };
  }
}
