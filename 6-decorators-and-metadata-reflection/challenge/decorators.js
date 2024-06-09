"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.Authorize = exports.Log = void 0;
require("reflect-metadata");
// LogDecorator
function Log(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyName}`);
        return method.apply(this, args);
    };
}
exports.Log = Log;
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
exports.Authorize = Authorize;
// RoleDecorator to set metadata
function Role(role) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata("role", role, target, propertyKey);
    };
}
exports.Role = Role;
