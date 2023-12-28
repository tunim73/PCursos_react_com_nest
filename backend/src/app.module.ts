import { Module } from '@nestjs/common';
import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    StudentModule,
    CourseModule,
    TeacherModule,
    LessonModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
