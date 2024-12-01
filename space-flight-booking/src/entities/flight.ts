export class Flight {
    constructor(
        public id: number,
        public destination: string,
        public date: Date,
        public capacity: number,
        public price: number
    ) {}
}
