import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Max,
  Min,
} from 'class-validator';
// import { IsEmail } from 'sequelize-typescript';
import { Roles } from 'src/common/enums/role';
import { UserStatus } from 'src/common/enums/user.status';

export class SignUpAuthDto {
  @ApiProperty({
    type: String,
    description: 'User name',
    example: 'John Doe',
  })
  @IsOptional()
  @Min(3)
  @Max(50)
  name: string;

  @ApiProperty({
    type: String,
    description: 'User username',
    example: 'johndoe',
  })
  @IsString()
  @Min(3)
  @Max(50)
  username: string;

  @ApiProperty({
    type: String,
    description: 'User Number',
    example: '+998********',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    type: String,
    description: 'User email',
    example: 'example@gmail.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    description: 'User password',
    example: 'password123',
  })
  @IsString()
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    type: Number,
    description: "User's age",
    example: 27,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    type: String,
    description: 'User gender',
    example: 'Male',
    enum: ['MALE', 'FEMALE'],
  })
  gender: string;

  @ApiProperty({
    type: String,
    description: 'User statuss',
    example: 'INACTIVE',
    enum: UserStatus,
  })
  status: UserStatus;

  @ApiProperty({
    type: String,
    description: 'User role  default student',
    example: 'STUDENT',
    enum: Roles,
  })
  role: string;
}
