"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const Booking_1 = require("../entities/Booking");
class BookingService {
    constructor() {
        this.bookings = [];
    }
    createBooking(customer, flight) {
        if (flight.capacity <= 0) {
            throw new Error("No seats available on this flight.");
        }
        const newBooking = new Booking_1.Booking(this.bookings.length + 1, customer, flight, "pending");
        flight.capacity--;
        this.bookings.push(newBooking);
        return newBooking;
    }
    cancelBooking(bookingId) {
        const booking = this.bookings.find(b => b.id === bookingId);
        if (!booking)
            throw new Error("Booking not found.");
        booking.status = "cancelled";
        booking.flight.capacity++;
    }
    listBookings() {
        return this.bookings;
    }
}
exports.BookingService = BookingService;
