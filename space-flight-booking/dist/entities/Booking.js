"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(id, customer, flight, status) {
        this.id = id;
        this.customer = customer;
        this.flight = flight;
        this.status = status;
    }
}
exports.Booking = Booking;
