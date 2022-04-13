import { Body, Controller, Post } from '@nestjs/common';
import { SearchData } from '../common/class/searchData';
import { BackService } from './back.service';

@Controller('back')
export class BackController {
  constructor(private readonly backService: BackService) {}
  @Post()
  search(@Body() body: SearchData) {
    return this.backService.searchRelevantData(body);
  }
}
