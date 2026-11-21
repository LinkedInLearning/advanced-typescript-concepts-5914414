"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = Log;
exports.Authorize = Authorize;
exports.Role = Role;
require("reflect-metadata");
// LogDecorator
function Log(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyName}`);
        return method.apply(this, args);
    };
}
// AuthorizeDecorator
function Authorize(roleRequired) {
    return function (target, propertyName, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            const role = Reflect.getMetadata("role", target, propertyName);
            if (role !== roleRequired) {
                console.log(`Access denied for ${propertyName}`);
                return;
            }
            return method.apply(this, args);
        };
    };
}
// RoleDecorator to set metadata
function Role(role) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata("role", role, target, propertyKey);
    };
}
