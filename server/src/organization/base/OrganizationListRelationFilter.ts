/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrganizationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereInput)
  @IsOptional()
  @Field(() => OrganizationWhereInput, {
    nullable: true,
  })
  every?: OrganizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereInput)
  @IsOptional()
  @Field(() => OrganizationWhereInput, {
    nullable: true,
  })
  some?: OrganizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereInput)
  @IsOptional()
  @Field(() => OrganizationWhereInput, {
    nullable: true,
  })
  none?: OrganizationWhereInput;
}
export { OrganizationListRelationFilter };
