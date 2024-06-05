import { Document } from "./Document";

export class WordDocument implements Document {
  content: string;
  name = "Text document";
  postfix = "docx";
  printContent(): void {
    console.log(`Reading the Word doc: ${this.content}`);
  }
}
