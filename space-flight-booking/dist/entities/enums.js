"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.BookingStatus = void 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["CONFIRMED"] = "confirmed";
    BookingStatus["PENDING"] = "pending";
    BookingStatus["CANCELLED"] = "cancelled";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["UNPAID"] = "unpaid";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
