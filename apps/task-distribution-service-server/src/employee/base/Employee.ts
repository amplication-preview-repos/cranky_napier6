/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEmployeeTaskSkills } from "./EnumEmployeeTaskSkills";
import { Assignment } from "../../assignment/base/Assignment";

@ObjectType()
class Employee {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumEmployeeTaskSkills,
    isArray: true,
  })
  @IsEnum(EnumEmployeeTaskSkills, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumEmployeeTaskSkills], {
    nullable: true,
  })
  taskSkills?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: () => [Assignment],
  })
  @ValidateNested()
  @Type(() => Assignment)
  @IsOptional()
  assignments?: Array<Assignment>;
}

export { Employee as Employee };
