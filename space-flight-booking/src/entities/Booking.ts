import { Flight } from "./flight";
import { Customer } from "./Customer";

export class Booking {
    constructor(
        public id: number,
        public customer: Customer,
        public flight: Flight,
        public status: "confirmed" | "pending" | "cancelled"
    ) {}
}
