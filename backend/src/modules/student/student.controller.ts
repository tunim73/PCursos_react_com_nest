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
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Public } from 'src/decorators/publicRoute.decorator';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Public()
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }
  @Get(':id/courses')
  getStudentCourses(@Param('id') id: string) {
    return this.studentService.getStudentCourses(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }

  @Put(':id/enroll_course')
  enrollCourse(@Param('id') id: string, @Body() body: { courseId: number }) {
    return this.studentService.enrollCourse(+id, +body.courseId);
  }

  @Put(':id/unenroll_course')
  unenrollCourse(@Param('id') id: string, @Body() body: { courseId: number }) {
    return this.studentService.unenrollCourse(+id, +body.courseId);
  }

  @Patch(':id/watched_lesson')
  watchedLesson(@Param('id') id: string, @Body() body: { lessonId: number }) {
    return this.studentService.watchedLesson(+id, +body.lessonId);
  }
}
