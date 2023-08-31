import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  allStudents() {
    return { status: 200, message: 'all list of students' };
  }

  @Get('/:id')
  studentDetail() {
    return { status: 200, message: 'student detail' };
  }

  @Post()
  createStudent() {
    return { status };
  }
}
