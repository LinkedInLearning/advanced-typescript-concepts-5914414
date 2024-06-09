"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function ReflectiveDecorator(target, propertyKey) {
    Reflect.defineMetadata("role", "user", target, propertyKey);
}
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello");
    }
}
__decorate([
    ReflectiveDecorator,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    ReflectiveDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "greet", null);
console.log(Reflect.getMetadata("role", User.prototype, "greet")); // Outputs: "admin"
function RoleCheck(roleRequired) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (Reflect.getMetadata("role", target, propertyKey) === roleRequired) {
                return originalMethod.apply(this, args);
            }
            else {
                console.error(`Access denied for method ${propertyKey}`);
            }
        };
    };
}
class SecureSystem {
    deleteUser() {
        console.log("User deleted");
    }
}
__decorate([
    ReflectiveDecorator,
    RoleCheck("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SecureSystem.prototype, "deleteUser", null);
const system = new SecureSystem();
system.deleteUser(); // Executes correctly if the role matches "admin"
