import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Subscription_tier } from './subscription-tier.enum';

@InputType()
export class NestedEnumSubscription_tierFilter {

    @Field(() => Subscription_tier, {nullable:true})
    equals?: keyof typeof Subscription_tier;

    @Field(() => [Subscription_tier], {nullable:true})
    in?: Array<keyof typeof Subscription_tier>;

    @Field(() => [Subscription_tier], {nullable:true})
    notIn?: Array<keyof typeof Subscription_tier>;

    @Field(() => NestedEnumSubscription_tierFilter, {nullable:true})
    not?: NestedEnumSubscription_tierFilter;
}
