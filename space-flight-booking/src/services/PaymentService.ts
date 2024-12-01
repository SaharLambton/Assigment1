import { Payment } from "../entities/Payment";

export class PaymentService {
    private payments: Payment[] = [];

    processPayment(bookingId: number, amount: number): Payment {
        const newPayment = new Payment(
            this.payments.length + 1,
            bookingId,
            amount,
            "paid"
        );

        this.payments.push(newPayment);
        return newPayment;
    }

    listPayments(): Payment[] {
        return this.payments;
    }
}
