import { Booking } from "../entities/Booking";
import { Customer } from "../entities/Customer";
import { Flight } from "../entities/flight";

export class BookingService {
    private bookings: Booking[] = [];

    createBooking(customer: Customer, flight: Flight): Booking {
        if (flight.capacity <= 0) {
            throw new Error("No seats available on this flight.");
        }

        const newBooking = new Booking(
            this.bookings.length + 1,
            customer,
            flight,
            "pending"
        );

        flight.capacity--;
        this.bookings.push(newBooking);
        return newBooking;
    }

    cancelBooking(bookingId: number): void {
        const booking = this.bookings.find(b => b.id === bookingId);
        if (!booking) throw new Error("Booking not found.");

        booking.status = "cancelled";
        booking.flight.capacity++;
    }

    listBookings(): Booking[] {
        return this.bookings;
    }
}
