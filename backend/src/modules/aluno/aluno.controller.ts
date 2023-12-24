import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Prisma } from '@prisma/client';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunoService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunoService.remove(+id);
  }

  @Put(':id/enroll_curso')
  enrollCurso(@Param('id') id: string, @Body() body: { cursoId: number }) {
    return this.alunoService.enrollCurso(+id, +body.cursoId);
  }

  @Put(':id/unenroll_curso')
  unenrollCurso(@Param('id') id: string, @Body() body: { cursoId: number }) {
    return this.alunoService.unenrollCurso(+id, +body.cursoId);
  }
}
