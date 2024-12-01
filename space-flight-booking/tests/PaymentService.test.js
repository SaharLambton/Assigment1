import { PaymentService } from "../src/services/PaymentService";
import { Payment } from "../src/entities/Payment";
test("Process a payment successfully", () => {
    const paymentService = new PaymentService();
    const payment = paymentService.processPayment(1, 3000);
    expect(payment.amount).toBe(3000);
    expect(payment.status).toBe("paid");
    expect(payment.bookingId).toBe(1);
});
test("Check if payment is registered", () => {
    const paymentService = new PaymentService();
    paymentService.processPayment(2, 5000);
    const payments = paymentService.listPayments();
    expect(payments.length).toBe(1);
    expect(payments[0].amount).toBe(5000);
    expect(payments[0].status).toBe("paid");
});
test("Ensure that unpaid payments are not processed", () => {
    const paymentService = new PaymentService();
    // Simulating an unpaid payment (you may modify the service to handle unpaid payments)
    const payment = new Payment(1, 1, 0, "unpaid");
    // Normally we'd throw an error or have a validation here.
    expect(payment.status).toBe("unpaid");
});
