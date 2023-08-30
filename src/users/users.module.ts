import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { UsersService } from './services/users/users.service';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes({
        path: 'users/create',
        method: RequestMethod.POST,
      })
      .apply(AuthMiddleware)
      .forRoutes({
        path: 'users/:id',
        method: RequestMethod.GET,
      });
  }
}
