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
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Public } from 'src/decorators/publicRoute.decorator';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Public()
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }
  @Get(':id/courses')
  getTeacherCourses(@Param('id') id: string) {
    return this.teacherService.getTeacherCourses(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }

  @Put(':id/join_the_course')
  joinTheCourse(@Param('id') id: string, @Body() body: { courseId: number }) {
    return this.teacherService.joinTheCourse(+id, +body.courseId);
  }

  @Put(':id/leaves_the_course')
  leavesTheCourse(@Param('id') id: string, @Body() body: { courseId: number }) {
    return this.teacherService.leavesTheCourse(+id, +body.courseId);
  }
}
