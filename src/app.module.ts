import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'ms_auth',
      username: 'postgres',
      password: '1234', // Change credentials if you clone the repo
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // DO NOT USE IN PRODUCTION
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
