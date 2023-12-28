import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentService } from 'src/modules/student/student.service';
import { TeacherService } from 'src/modules/teacher/teacher.service';
import { ResAuthDto } from './dto/res-auth.dto';
import { Hash } from 'src/util/hash/hash';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private studentService: StudentService,
    private teacherService: TeacherService,
  ) {}

  async signIn(email: string, password: string, type: string) {
    const findByUserType = {
      'admin@admin.com': async () => {
        type = 'admin';
        return await this.teacherService.findEmail(email);
      },
      student: async () => {
        return await this.studentService.findEmail(email);
      },
      teacher: async () => {
        return await this.teacherService.findEmail(email);
      },
    };

    const findUser: () => Promise<ResAuthDto> =
      findByUserType[email] || findByUserType[type];

    const user = await findUser();

    if (!user) throw new NotFoundException('Usuário não localizado');

    const isPasswordCorrect = await Hash.compare(password, user.password);

    if (!isPasswordCorrect) throw new UnauthorizedException('Senha incorreta');

    const payload = { user, type };

    delete user.password;

    return {
      user: {...user, type},
      token: await this.jwtService.signAsync(payload),
    };
  }
}
