import { formElements } from "./formElements";
import formData from "../fixtures/testData.json"

const form_elements = new formElements();


export class nameFieldTest{
    nameField(){
        form_elements.form.fullName().type(formData.specialCharacter).blur();
        form_elements.form.fullName().invoke('val').should('match', '/^[a-zA-Z\s]*$/');
        cy.get('[test-id="validationMessage"]').should("be.visibile").and('contain', 'Invalid Characters')
        }
    }