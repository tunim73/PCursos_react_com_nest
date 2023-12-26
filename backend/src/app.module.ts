import { Module } from '@nestjs/common';
import { AlunoModule } from './modules/aluno/aluno.module';
import { CursoModule } from './modules/curso/curso.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { AulaModule } from './modules/aula/aula.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [AlunoModule, CursoModule, ProfessorModule, AulaModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
