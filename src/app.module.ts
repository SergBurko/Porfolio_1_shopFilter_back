import { Module } from '@nestjs/common';
import { BackModule } from './back/back.module';
import { FrontModule } from './front/front.module';

@Module({
  imports: [BackModule, FrontModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
