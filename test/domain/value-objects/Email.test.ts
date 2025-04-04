import { describe, test, it, expect } from 'vitest';
import {Email} from "../../../domain/value-objects/Email";

describe("Email", ()=>{
    it('should create an instance of email with valid input', ()=>{
        const validEmail = 'validemail@gmail.com';
        const emailinstance = Email.create(validEmail);
        expect(emailinstance).toBeInstanceOf(Email);
        expect(emailinstance.value).equals(validEmail);
    });

    it('should throw an error if email is missing', ()=>{
        const emptyEmail ='';
        expect(()=>Email.create(emptyEmail)).toThrowError('email is required');
    })

    it('should throw an error if email is invalid', ()=>{
        const invalidEmail = 'invalidEmail';
        expect(()=> Email.create(invalidEmail)).toThrowError('email is invalid');
    })

    it('should format the email correctly', ()=>{
        const nonFomattedEmail = 'ICare@gMail.Com';
        const formattedEmail = 'icare@gmail.com';
        const emailInstance = Email.create(nonFomattedEmail)
        expect(emailInstance.value).equals(formattedEmail);
    })

    it('should return true if instances are equal',()=>{
        const instance1 = Email.create('gg@gmail.com');
        const instance2 = Email.create('gg@gmail.com');
        const areEqual = instance1.equals(instance2);
        expect(areEqual).toBe(true);
    })

    it('should return false if instances are not equal',()=>{
        const instance1 = Email.create('gg@gmail.com');
        const instance2 = Email.create('gg@gmil.com');
        const areEqual = instance1.equals(instance2);
        expect(areEqual).toBe(false);
    })
})