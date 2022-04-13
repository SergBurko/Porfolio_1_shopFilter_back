import { Module } from '@nestjs/common';
import { FrontController } from './front.controller';

@Module({
  providers: [],
  controllers: [FrontController],
})
export class FrontModule {}
