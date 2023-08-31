import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student/student.controller';
import { ControllersController } from './controllers/controllers.controller';
import { StudentController } from './controllers/student/student.controller';

@Module({
  controllers: [StudentController, ControllersController]
})
export class StudentsModule {}
