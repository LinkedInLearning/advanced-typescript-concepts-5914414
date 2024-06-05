import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardStrategy } from './CreditCardStrategy';
import { PayPalStrategy } from './PayPalStrategy';
import { CryptoStrategy } from './CryptoStrategy';

const amount = 150;
const creditCard = new CreditCardStrategy();
const payPal = new PayPalStrategy();
const crypto = new CryptoStrategy();

const paymentProcessor = new PaymentProcessor(creditCard);
console.log(paymentProcessor.processPayment(amount));  // Uses Credit Card strategy

paymentProcessor.setStrategy(payPal);
console.log(paymentProcessor.processPayment(amount));  // Switches to PayPal strategy

paymentProcessor.setStrategy(crypto);
console.log(paymentProcessor.processPayment(amount));  // Switches to Cryptocurrency strategy
