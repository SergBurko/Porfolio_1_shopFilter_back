export class Company_Entity {
  spec: string;
  city: string;
  companyName: string;

  constructor(spec: string, city: string, companyName: string) {
    this.spec = spec;
    this.city = city;
    this.companyName = companyName;
  }
}
