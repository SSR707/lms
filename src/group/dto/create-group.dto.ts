import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({
    type: String,
    description: 'group name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'group description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    type:Number,
    description: 'group course_id',
  })
  @IsNumber()
  @IsNotEmpty()
  course_id: number;

  @ApiProperty({
    type:Date,
    description: 'group start_date',
  })
  @IsDate()
  @IsNotEmpty()
  start_date: Date;

  
  @ApiProperty({
    type:Date,
    description: 'group end_date',
  })
  @IsDate()
  @IsNotEmpty()
  end_date: Date;
  
  @ApiProperty({
    type: String,
    description: 'group room',
  })
  @IsString()
  @IsNotEmpty()
  room: string;
  @ApiProperty({
    type: Number,
    description: 'group student_id',
  })
  @IsNumber()
  @IsNotEmpty()
  student_id: number;
  @ApiProperty({
    type: Number,
    description: 'group teacher_id',
  })
  @IsNumber()
  @IsNotEmpty()
  teacher_id: number;
}
