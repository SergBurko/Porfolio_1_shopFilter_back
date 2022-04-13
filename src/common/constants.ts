import { Company } from './class/company';

export class Constants {
  static COMPANIES: Company[] = [
    new Company('Car Manufacturing', 'Regensburg', 'BMW'),
    new Company('Car Manufacturing', 'Lviv', 'LAZ'),
    new Company('Car Manufacturing', 'Michigan', 'Ford'),
    new Company('Scrap Metal Recycling', 'Berlin', 'Ford Utilization'),
    new Company('Scrap Metal Recycling', 'Istambul', 'LAZ Utilization'),
    new Company('Chocolate Factory', 'Istambul', 'ChokoRahatLukum'),
    new Company('Chocolate Factory', 'Geneva', 'Milka'),
  ];
  static BAD_REQUEST_TXT = 'NO!..';
}
