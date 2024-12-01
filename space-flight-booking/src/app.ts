import { Customer } from "./entities/Customer";
import { Flight } from "./entities/flight";
import { BookingService } from "./services/BookingService";
import { MedicalService } from "./services/MedicalService";
import { PaymentService } from "./services/PaymentService";
import { Logger } from "./utils/Logger";

const bookingService = new BookingService();
const medicalService = new MedicalService();
const paymentService = new PaymentService();

// Create sample data
const customer = new Customer(1, "John Doe", 30, true);
const flight = new Flight(1, "Mars", new Date("2025-07-15"), 10, 5000);

// Verify customer eligibility
if (medicalService.verifyCustomer(customer)) {
    Logger.log("Customer passed medical verification.");
    const booking = bookingService.createBooking(customer, flight);
    Logger.log(`Booking created with ID: ${booking.id}`);
    
    const payment = paymentService.processPayment(booking.id, flight.price);
    Logger.log(`Payment processed with ID: ${payment.id}`);
} else {
    Logger.log("Customer failed medical verification.");
}
