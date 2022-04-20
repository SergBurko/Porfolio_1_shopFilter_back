import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from '../api/company/company.controller';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
