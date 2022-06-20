import { HttpModule } from '@nestjs/axios'
import { CacheModule, Module } from '@nestjs/common'

import { GuildConfigResolver } from './resolvers/guild-config.resolver'
import { GuildsResolver } from './resolvers/guilds.resolver'
import { GuildsHttpService } from './services/guilds-http.service'
import { GuildsService } from './services/guilds.service'
import { GuildServiceGateway } from './websocket/guild-service.gateway'

import { GUILDS_HTTP_SERVICE, GUILDS_SERVICE, PRISMA_SERVICE } from '../common'
import { PrismaService } from '../prisma.service'

@Module({
  imports: [HttpModule, CacheModule.register({ isGlobal: true, ttl: 30 })],
  providers: [
    { provide: GUILDS_HTTP_SERVICE, useClass: GuildsHttpService },
    { provide: GUILDS_SERVICE, useClass: GuildsService },
    { provide: PRISMA_SERVICE, useClass: PrismaService },
    GuildsResolver,
    GuildConfigResolver,
    GuildServiceGateway,
  ],
})
export class GuildsModule {}
