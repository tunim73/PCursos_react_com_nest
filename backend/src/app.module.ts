import { Module } from '@nestjs/common';
import { AlunoModule } from './modules/aluno/aluno.module';
import { CursoModule } from './modules/curso/curso.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { AulaModule } from './modules/aula/aula.module';
@Module({
  imports: [AlunoModule, CursoModule, ProfessorModule, AulaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
