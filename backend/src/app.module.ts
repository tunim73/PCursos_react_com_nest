import { Module } from '@nestjs/common';
import { AlunoModule } from './modules/aluno/aluno.module';
import { CursoModule } from './modules/curso/curso.module';
import { ProfessorModule } from './modules/professor/professor.module';
@Module({
  imports: [AlunoModule, CursoModule, ProfessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
