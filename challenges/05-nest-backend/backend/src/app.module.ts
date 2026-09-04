import { Module } from '@nestjs/common';
import { UserController } from './users/controllers/user.controller.js';
import { UserService } from './users/services/user.service.js';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}