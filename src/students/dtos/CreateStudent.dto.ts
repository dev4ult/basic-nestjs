import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone_number: string;
}
