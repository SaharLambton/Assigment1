import { BookingService } from "../src/services/BookingService";
import { Customer } from "../src/entities/Customer";
import { Flight } from "../src/entities/flight";
test("Create a booking", () => {
    const bookingService = new BookingService();
    const customer = new Customer(1, "Alice", 25, true);
    const flight = new Flight(1, "Moon", new Date(), 5, 3000);
    const booking = bookingService.createBooking(customer, flight);
    expect(booking.customer.name).toBe("Alice");
    expect(flight.capacity).toBe(4);
});
