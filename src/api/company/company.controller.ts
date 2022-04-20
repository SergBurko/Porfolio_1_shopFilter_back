import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchData_DTO } from '../../domain/DTO/searchData_DTO';
import { CompanyService } from '../../service/company.service';
import { Company_MockData } from '../../domain/MockData/company_MockData';

@Controller('/company')
export class CompanyController {
  constructor(private readonly backService: CompanyService) {}
  @Get('/get_filtered')
  search(@Body() body: SearchData_DTO) {
    return this.backService.searchRelevantData(body);
  }

  @Get('/get_all')
  returnWholeList() {
    return Company_MockData.COMPANIES;
  }
}
