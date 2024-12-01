import { MedicalService } from "../src/services/MedicalService";
import { Customer } from "../src/entities/Customer";
test("Verify eligible customer with valid medical certificate", () => {
    const medicalService = new MedicalService();
    const customer = new Customer(1, "John Doe", 30, true);
    const isEligible = medicalService.verifyCustomer(customer);
    expect(isEligible).toBe(true);
});
test("Verify ineligible customer due to age", () => {
    const medicalService = new MedicalService();
    const customer = new Customer(2, "Jane Doe", 16, true);
    const isEligible = medicalService.verifyCustomer(customer);
    expect(isEligible).toBe(false);
});
test("Verify ineligible customer due to lack of medical certificate", () => {
    const medicalService = new MedicalService();
    const customer = new Customer(3, "Jack Doe", 25, false);
    const isEligible = medicalService.verifyCustomer(customer);
    expect(isEligible).toBe(false);
});
