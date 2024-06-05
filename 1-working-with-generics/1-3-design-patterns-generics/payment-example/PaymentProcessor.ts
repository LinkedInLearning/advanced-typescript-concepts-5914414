import { PaymentStrategy } from './PaymentStrategy';

export class PaymentProcessor {
    private strategy: PaymentStrategy;
 
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
 
    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }
 
    processPayment(amount: number): string {
        return this.strategy.processPayment(amount);
    }
}
