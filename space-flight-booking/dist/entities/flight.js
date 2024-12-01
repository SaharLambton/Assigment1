"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
class Flight {
    constructor(id, destination, date, capacity, price) {
        this.id = id;
        this.destination = destination;
        this.date = date;
        this.capacity = capacity;
        this.price = price;
    }
}
exports.Flight = Flight;
