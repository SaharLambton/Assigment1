"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./entities/Customer");
const flight_1 = require("./entities/flight");
const BookingService_1 = require("./services/BookingService");
const MedicalService_1 = require("./services/MedicalService");
const PaymentService_1 = require("./services/PaymentService");
const Logger_1 = require("./utils/Logger");
const bookingService = new BookingService_1.BookingService();
const medicalService = new MedicalService_1.MedicalService();
const paymentService = new PaymentService_1.PaymentService();
// Create sample data
const customer = new Customer_1.Customer(1, "John Doe", 30, true);
const flight = new flight_1.Flight(1, "Mars", new Date("2025-07-15"), 10, 5000);
// Verify customer eligibility
if (medicalService.verifyCustomer(customer)) {
    Logger_1.Logger.log("Customer passed medical verification.");
    const booking = bookingService.createBooking(customer, flight);
    Logger_1.Logger.log(`Booking created with ID: ${booking.id}`);
    const payment = paymentService.processPayment(booking.id, flight.price);
    Logger_1.Logger.log(`Payment processed with ID: ${payment.id}`);
}
else {
    Logger_1.Logger.log("Customer failed medical verification.");
}
