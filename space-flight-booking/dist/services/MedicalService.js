"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalService = void 0;
class MedicalService {
    verifyCustomer(customer) {
        return customer.age >= 18 && customer.medicalCertificate;
    }
}
exports.MedicalService = MedicalService;
