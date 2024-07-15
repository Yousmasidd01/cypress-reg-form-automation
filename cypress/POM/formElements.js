export class formElements {
    form = {
        fullName : ()=> cy.get('[test-id="fullName"]'),
        emailAdress : ()=> cy.get('[test-id="email"]'),
        password : ()=> cy.get('[test-id="password"]'),
        confirmPassword : ()=> cy.get('[test-id="confirmPassword"]'),
        DOB : ()=> cy.get('[test-id="DOB"]'),
        gender : ()=> cy.get('[test-id="gender"]'),
        newsLetterSub : ()=> cy.get('[test-id="newsSub"]'),
        submitBtn : ()=> cy.get('[test-id="submit"]')
    }
}