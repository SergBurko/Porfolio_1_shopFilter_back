import { Body, Controller, Post } from '@nestjs/common';
import { SearchData } from '../common/class/searchData';
import { BackService } from './back.service';

@Controller('companies')
export class BackController {
  constructor(private readonly backService: BackService) {}
  @Get("search")
  search(@Body() body: SearchData) {
    return this.backService.searchRelevantData(body);
  }

  @Get()
  returnWholeList() {
    return Constants.COMPANIES;
  }
}