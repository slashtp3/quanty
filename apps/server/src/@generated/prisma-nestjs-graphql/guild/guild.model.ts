import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Guild_tier } from '../prisma/guild-tier.enum';
import { Subscription } from '../subscription/subscription.model';
import { GuildSettings } from '../guild-settings/guild-settings.model';
import { GuildPlugins } from '../guild-plugins/guild-plugins.model';

@ObjectType()
export class Guild {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Guild_tier, {nullable:false,defaultValue:'FREE'})
    tier!: keyof typeof Guild_tier;

    @Field(() => String, {nullable:false,defaultValue:'q!'})
    prefix!: string;

    @Field(() => Subscription, {nullable:true})
    subscription?: Subscription | null;

    @Field(() => GuildSettings, {nullable:true})
    guildSettings?: GuildSettings | null;

    @Field(() => GuildPlugins, {nullable:true})
    guildPlugins?: GuildPlugins | null;
}
