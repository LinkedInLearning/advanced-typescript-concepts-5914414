export interface Document {
  name: string;
  postfix: string;
  content: string;
  printContent(): void;
}
