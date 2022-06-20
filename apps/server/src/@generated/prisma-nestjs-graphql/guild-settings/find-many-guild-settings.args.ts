import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuildSettingsWhereInput } from './guild-settings-where.input';
import { Type } from 'class-transformer';
import { GuildSettingsOrderByWithRelationInput } from './guild-settings-order-by-with-relation.input';
import { GuildSettingsWhereUniqueInput } from './guild-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GuildSettingsScalarFieldEnum } from './guild-settings-scalar-field.enum';

@ArgsType()
export class FindManyGuildSettingsArgs {

    @Field(() => GuildSettingsWhereInput, {nullable:true})
    @Type(() => GuildSettingsWhereInput)
    where?: GuildSettingsWhereInput;

    @Field(() => [GuildSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuildSettingsOrderByWithRelationInput>;

    @Field(() => GuildSettingsWhereUniqueInput, {nullable:true})
    cursor?: GuildSettingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GuildSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GuildSettingsScalarFieldEnum>;
}
