import "reflect-metadata";

// LogDecorator
export function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName}`);
    return method.apply(this, args);
  }
}

// AuthorizeDecorator
export function Authorize(roleRequired: string) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const role = Reflect.getMetadata("role", target, propertyName);
      if (role !== roleRequired) {
        console.log(`Access denied for ${propertyName}`);
        return;
      }
      return method.apply(this, args);
    }
  }
}

// RoleDecorator to set metadata
export function Role(role: string) {
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    Reflect.defineMetadata("role", role, target, propertyKey);
  };
}
