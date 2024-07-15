
import { describe } from "mocha";

import {emailTest} from "../POM/emailTest";
const email_test = new emailTest();

import {formSubmission} from "../POM/formSubmission";
const form_submission = new formSubmission();

import { passwordTest } from "../POM/passwordTest";
const password_test = new passwordTest();

import {nameFieldTest} from "../POM/nameFieldTest";
const name_field_test = new nameFieldTest();


describe("Registeration form testing ", ()=>{
    it("Verify that the form submits successfully when all fields are filled with valid data.", ()=>{
        email_test.successfulSubmission();
        email_test.unsuccessfullSubmission();
    })

    it("Verify that the form submits successfully when all fields are filled with valid data." , ()=>{
        form_submission.successfulSubmission();
    })

    it("Verify that the form displays an error message when the password and confirm password fields do not match.", ()=>{
        password_test.password_validation();
    })

    it("Verify that the form displays an error message on top of the field when a special character is entered in the name field", ()=>{
        name_field_test.nameField();
    })
})

   