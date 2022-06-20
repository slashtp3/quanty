import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumGuild_tierFieldUpdateOperationsInput } from '../prisma/enum-guild-tier-field-update-operations.input';
import { SubscriptionUpdateOneWithoutGuildInput } from '../subscription/subscription-update-one-without-guild.input';
import { GuildPluginsUpdateOneWithoutGuildInput } from '../guild-plugins/guild-plugins-update-one-without-guild.input';

@InputType()
export class GuildUpdateWithoutGuildSettingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGuild_tierFieldUpdateOperationsInput, {nullable:true})
    tier?: EnumGuild_tierFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    prefix?: StringFieldUpdateOperationsInput;

    @Field(() => SubscriptionUpdateOneWithoutGuildInput, {nullable:true})
    subscription?: SubscriptionUpdateOneWithoutGuildInput;

    @Field(() => GuildPluginsUpdateOneWithoutGuildInput, {nullable:true})
    guildPlugins?: GuildPluginsUpdateOneWithoutGuildInput;
}
