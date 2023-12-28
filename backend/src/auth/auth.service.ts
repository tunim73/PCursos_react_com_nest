import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(email: string, password: string, type: string) {
    const user = 'usuario';

    const payload = { sub: 'ad' };

    /* const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    */

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
