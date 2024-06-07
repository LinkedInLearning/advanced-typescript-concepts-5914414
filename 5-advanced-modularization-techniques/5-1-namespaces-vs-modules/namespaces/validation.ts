namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export interface StringValidator {  // This merges with the above interface
    isAcceptable(s: string): boolean;
  }

  export function parse(value: string): string;
  export function parse(value: number): string;

  export function parse(value: string | number): string {  // Implementation must unify all overloads
    if (typeof value === 'number') {
      return value.toString();
    } else {
      return value;
    }
  }
}
