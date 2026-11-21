import "reflect-metadata";
import ProductManagement from "./productManagement";

const pm = new ProductManagement();
pm.createProduct("Laptop", 1200); // Should log and then execute if authorized
pm.deleteProduct("Laptop"); // Should just log the call
