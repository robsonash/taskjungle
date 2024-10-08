import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:123@localhost:27017/', {
    dbName:'taskjungle'
  }), UserModule, AuthModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
