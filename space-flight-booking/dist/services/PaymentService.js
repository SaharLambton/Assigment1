"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const Payment_1 = require("../entities/Payment");
class PaymentService {
    constructor() {
        this.payments = [];
    }
    processPayment(bookingId, amount) {
        const newPayment = new Payment_1.Payment(this.payments.length + 1, bookingId, amount, "paid");
        this.payments.push(newPayment);
        return newPayment;
    }
    listPayments() {
        return this.payments;
    }
}
exports.PaymentService = PaymentService;
