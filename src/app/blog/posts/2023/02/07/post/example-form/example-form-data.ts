export class ExampleFormData {
  
  constructor(name: string, comment: string, formName: string = "comment-form") {
    this.name = name;
    this.comment = comment;
    this["form-name"] = formName
  }

  name: string;
  email?: string;
  url?: string;
  comment: string;
  "form-name": string;
}