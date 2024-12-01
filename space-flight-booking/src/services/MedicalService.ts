import { Customer } from "../entities/Customer";

export class MedicalService {
    verifyCustomer(customer: Customer): boolean {
        return customer.age >= 18 && customer.medicalCertificate;
    }
}
