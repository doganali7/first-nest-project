import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
// import { parse } from 'path';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe');
    console.log(value);
    console.log(metadata);
    const { age } = value;
    const parseValueToInt = parseInt(age);
    if (isNaN(parseValueToInt))
      throw new HttpException('Age is not a number', HttpStatus.BAD_REQUEST);

    console.log('parseValueToInt', { ...value, age: parseValueToInt });
    return { ...value, age: parseValueToInt };
  }
}
