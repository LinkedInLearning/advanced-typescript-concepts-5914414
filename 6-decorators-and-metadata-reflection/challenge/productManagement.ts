export class ProductManagement {
  createProduct(name: string, price: number) {
    console.log(`Product created: ${name}, Price: ${price}`);
  }

  deleteProduct(name: string) {
    console.log(`Product deleted: ${name}`);
  }
}
