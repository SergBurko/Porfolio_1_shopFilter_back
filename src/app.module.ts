import { Module } from '@nestjs/common';
import { CompanyModule } from './service/company.module';

@Module({
  imports: [CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
