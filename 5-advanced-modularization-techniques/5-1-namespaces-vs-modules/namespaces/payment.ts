namespace Payment {
  export class Invoice {
    constructor(public amount: number) { }
  }

  export function calculateTotal(invoices: Invoice[]) {
    return invoices.reduce((total, invoice) => total + invoice.amount, 0);
  }
}

// Usage
let invoices = [new Payment.Invoice(100), new Payment.Invoice(200)];
console.log(Payment.calculateTotal(invoices));  // Outputs: 300
