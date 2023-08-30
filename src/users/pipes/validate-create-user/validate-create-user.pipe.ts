import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside the CreateUserPipe!');

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(parseAgeToInt);
      throw new HttpException(
        'Field Age is not a number...',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { ...value, age: parseAgeToInt };
  }
}
