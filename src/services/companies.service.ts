import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SearchData } from '../common/class/searchData';
import { Company } from '../common/class/company';
import { Constants } from '../common/constants';

@Injectable()
export class BackService {
  searchRelevantData(searchData: SearchData) {
    let relevantCompanies: Company[] = Constants.COMPANIES;
    let tmpArr = [];
    let snippets: string[] = [];
    try {
      if (searchData.snippets && searchData.snippets.trim().length > 0) {
        snippets = snippets.concat(
          this.uniqueArrValues(
            searchData.snippets.trim().replace('  ', ' ').split(' '),
          ),
        );
      }

      if (searchData.spec && searchData.spec.length > 0) {
        for (const spec of searchData.spec) {
          tmpArr = tmpArr.concat(
            relevantCompanies.filter(
              (company) =>
                company.spec.toLowerCase().indexOf(spec.toLowerCase()) >= 0,
            ),
          );
        }
        relevantCompanies = tmpArr;
        tmpArr = [];
      }

      if (searchData.city && searchData.city.length > 0) {
        for (const city of searchData.city) {
          tmpArr = tmpArr.concat(
            relevantCompanies.filter(
              (company) => company.city.indexOf(city) >= 0,
            ),
          );
        }
        relevantCompanies = tmpArr;
        tmpArr = [];
      }

      if (snippets.length > 0 && relevantCompanies.length > 0) {
        for (const snippet of snippets) {
          tmpArr = tmpArr.concat(
            relevantCompanies.filter(
              (company) =>
                company.city.toLowerCase().indexOf(snippet.toLowerCase()) >= 0 ||
                company.spec.toLowerCase().indexOf(snippet.toLowerCase()) >= 0 ||
                company.companyName
                  .toLowerCase()
                  .indexOf(snippet.toLowerCase()) >= 0,
            ),
          );
        }
        relevantCompanies = tmpArr;
        tmpArr = [];
      }
    } catch (e) {
      throw new HttpException(
        Constants.BAD_REQUEST_TXT,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.uniqueArrValues(relevantCompanies);
  }

  private uniqueArrValues(arr) {
    const uniqArr = [];
    for (const val of arr) {
      if (!uniqArr.includes(val)) {
        uniqArr.push(val);
      }
    }
    return uniqArr;
  }
}
