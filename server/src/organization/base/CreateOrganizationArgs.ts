/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { OrganizationCreateInput } from "./OrganizationCreateInput";

@ArgsType()
class CreateOrganizationArgs {
  @Field(() => OrganizationCreateInput, { nullable: false })
  data!: OrganizationCreateInput;
}

export { CreateOrganizationArgs };
