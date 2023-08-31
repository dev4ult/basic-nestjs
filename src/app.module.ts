import { Module } from '@nestjs/common';
import { StudentController } from './students/controllers/student/student.controller';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [StudentsModule],
  controllers: [StudentController],
  providers: [],
})
export class AppModule {}
