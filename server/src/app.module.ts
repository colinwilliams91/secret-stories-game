import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
 * import { ConfigModule } from '@nestjs/config'
import { UsersController } from './users/users.controller';
 * @Module({
 *  imports: [...ConfigModule] // <-- to use parsed .env variables in services where needed
 * ...
 * })
 *
 * const databaseHost = this.configService.get<string>('INSTANCE_DOMAIN');
 * private readonly configService: ConfigService, // <-- inside Service constructor
 * console.log(databaseHost); // --> 'localhost'
 *
 */
