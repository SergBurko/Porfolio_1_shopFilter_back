export class SearchData_DTO {
  snippets?: string;
  city?: string[];
  spec?: string[];

  constructor(snippets?: string, city?: string[], spec?: string[]) {
    this.snippets = snippets;
    this.city = city;
    this.spec = spec;
  }
}
