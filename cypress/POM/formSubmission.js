import { formElements } from "./formElements";
import formData from "../fixtures/testData.json"

const form_elements = new formElements();


export class formSubmission{
    successfulSubmission(){
        form_elements.form.fullName().type(formData.fullName);
        form_elements.form.fullName().should('have.value', formData.fullName);
        form_elements.form.emailAdress().type(formData.email);
        form_elements.form.emailAdress().should('have.value', formData.email);
        form_elements.form.password().type(formData.password);
        form_elements.form.confirmPassword().type(formData.password);
        form_elements.form.DOB().type(formData.DOB);
        form_elements.form.DOB().should('have.value', formData.DOB);
        form_elements.form.gender().then(($genderSelect)=>{
            if($genderSelect.find('option[value="female"]').length>0){
                cy.wrap($genderSelect).select("female")

                cy.wrap($genderSelect).should('have.value', 'female')
            }
            else{
                console.log("Female option is not available")
            }
        })
        form_elements.form.newsLetterSub().then(($option)=>{
            if ($option.find('option[value="Yes"]').length>0){
                cy.wrap($option).select("Yes")
                cy.wrap($option).should('have.value', 'Yes')
            }
            else{
                console.log("yes option is not available")
            }
        })
        form_elements.form.submitBtn().click()
        cy.get('[test-id="successMessage"]').should('be.visible').and('contain', 'Form Submitted successfully')
        
        }
    }