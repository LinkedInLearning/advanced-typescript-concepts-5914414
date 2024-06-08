import { DocumentFactory } from "./DocumentFactory";
const factory = new DocumentFactory();

const wordDoc = factory.createDocument("word");
wordDoc.content = "Hello, the bird is the word";
wordDoc.printContent();

const excelDoc = factory.createDocument("excel");
excelDoc.content = "Data1, Data2, Data3";
excelDoc.printContent();

try {
  const pdfDoc = factory.createDocument("pdf");
} catch(error) {
  console.log(error);
}
