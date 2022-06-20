import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { GuildRelationFilter } from '../guild/guild-relation-filter.input';

@InputType()
export class GuildPluginsWhereInput {

    @Field(() => [GuildPluginsWhereInput], {nullable:true})
    AND?: Array<GuildPluginsWhereInput>;

    @Field(() => [GuildPluginsWhereInput], {nullable:true})
    OR?: Array<GuildPluginsWhereInput>;

    @Field(() => [GuildPluginsWhereInput], {nullable:true})
    NOT?: Array<GuildPluginsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    autoMod?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    anime?: BoolFilter;

    @Field(() => GuildRelationFilter, {nullable:true})
    guild?: GuildRelationFilter;
}
