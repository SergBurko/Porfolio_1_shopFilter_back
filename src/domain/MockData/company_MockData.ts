import { Company_Entity } from '../Entity/company_Entity';

export class Company_MockData {
  static COMPANIES: Company_Entity[] = [
    new Company_Entity('Car Manufacturing', 'Regensburg', 'BMW'),
    new Company_Entity('Car Manufacturing', 'Lviv', 'LAZ'),
    new Company_Entity('Car Manufacturing', 'Michigan', 'Ford'),
    new Company_Entity('Scrap Metal Recycling', 'Berlin', 'Ford Utilization'),
    new Company_Entity('Scrap Metal Recycling', 'Istambul', 'LAZ Utilization'),
    new Company_Entity('Chocolate Factory', 'Istambul', 'ChokoRahatLukum'),
    new Company_Entity('Chocolate Factory', 'Geneva', 'Milka'),
  ];
}
