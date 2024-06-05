import { PaymentStrategy } from './PaymentStrategy';

export class PayPalStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    // Simulate PayPal payment processing
    console.log(`Processing PayPal payment for amount: $${amount}`);
    return `PayPal payment of $${amount} processed.`;
  }
}
