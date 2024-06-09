import { Log, Authorize, Role } from './decorators';

class ProductManagement {
  @Log
  @Role("user")
  @Authorize("admin")
  createProduct(name: string, price: number) {
    console.log(`Product created: ${name}, Price: ${price}`);
  }

  @Log
  deleteProduct(name: string) {
    console.log(`Product deleted: ${name}`);
  }
}

export default ProductManagement;
