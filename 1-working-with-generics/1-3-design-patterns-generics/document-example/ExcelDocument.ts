import { Document } from "./Document";

export class ExcelDocument implements Document {
  content: string;
  name = "Table document";
  postfix = "xlsx";
  printContent(): void {
    console.log(`Reading the Excel doc: ${this.content}`);
  }
}
