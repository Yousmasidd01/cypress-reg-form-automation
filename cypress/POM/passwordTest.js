import { formElements } from "./formElements";
import formData from "../fixtures/testData.json"

const form_elements = new formElements();


export class passwordTest{
    password_validation(){
        form_elements.form.fullName().type(formData.fullName);
        form_elements.form.fullName().should('have.value', formData.fullName);
        form_elements.form.emailAdress().type(formData.email);
        form_elements.form.emailAdress().should('have.value', formData.email);
        form_elements.form.password().type(formData.password).blur();
        form_elements.form.confirmPassword().type(formData.wrongPassword).blur();
        cy.get('[test-id="passValidationMessage"]').should('be.visible').and('contains', 'Passwords does not match')
        }
    }