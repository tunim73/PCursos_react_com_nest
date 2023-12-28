import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { ReqAuthDto } from './dto/req-auth.dto';
import { Public } from 'src/decorators/publicRoute.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() data: ReqAuthDto) {
    return this.authService.signIn(data.email, data.password, data.type);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
