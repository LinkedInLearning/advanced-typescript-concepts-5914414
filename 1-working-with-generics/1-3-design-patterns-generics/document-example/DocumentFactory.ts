import { Document } from "./Document";
import { WordDocument } from "./WordDocument";
import { ExcelDocument } from "./ExcelDocument";

export class DocumentFactory {
  createDocument(type: string): Document {
    if (type === "word") {
      return new WordDocument();
    } else if (type === "excel") {
      return new ExcelDocument();
    } else {
      throw new Error("Invalid document type");
    }
  }
}