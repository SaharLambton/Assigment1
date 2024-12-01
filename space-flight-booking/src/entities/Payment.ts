export class Payment {
    constructor(
        public id: number,
        public bookingId: number,
        public amount: number,
        public status: "paid" | "unpaid"
    ) {}
}
