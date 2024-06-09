import "reflect-metadata";

function ReflectiveDecorator(target: any, propertyKey: string) {
  Reflect.defineMetadata("role", "user", target, propertyKey);
}

class User {
  @ReflectiveDecorator
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @ReflectiveDecorator
  greet() {
    console.log("Hello");
  }
}

console.log(Reflect.getMetadata("role", User.prototype, "greet"));  // Outputs: "admin"

function RoleCheck(roleRequired: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (Reflect.getMetadata("role", target, propertyKey) === roleRequired) {
        return originalMethod.apply(this, args);
      } else {
        console.error(`Access denied for method ${propertyKey}`);
      }
    };
  };
}

class SecureSystem {
  @ReflectiveDecorator
  @RoleCheck("admin")
  deleteUser() {
    console.log("User deleted");
  }
}

const system = new SecureSystem();
system.deleteUser();  // Executes correctly if the role matches "admin"

