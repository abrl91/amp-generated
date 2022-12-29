/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmptyWhereInput } from "./EmptyWhereInput";
import { Type } from "class-transformer";
import { EmptyOrderByInput } from "./EmptyOrderByInput";

@ArgsType()
class EmptyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmptyWhereInput,
  })
  @Field(() => EmptyWhereInput, { nullable: true })
  @Type(() => EmptyWhereInput)
  where?: EmptyWhereInput;

  @ApiProperty({
    required: false,
    type: [EmptyOrderByInput],
  })
  @Field(() => [EmptyOrderByInput], { nullable: true })
  @Type(() => EmptyOrderByInput)
  orderBy?: Array<EmptyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmptyFindManyArgs };
