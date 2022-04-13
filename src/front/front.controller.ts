import { Controller, Get } from '@nestjs/common';
import { Constants } from '../common/constants';

@Controller('front')
export class FrontController {
  @Get()
  returnWholeList() {
    return Constants.companies;
  }
}
