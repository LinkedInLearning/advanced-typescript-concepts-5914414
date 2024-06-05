import { PaymentStrategy } from './PaymentStrategy';

export class CryptoStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Simulate cryptocurrency payment processing
    console.log(`Processing cryptocurrency payment for amount: $${amount}`);
    return `Cryptocurrency payment of $${amount} processed.`;
  }
}
