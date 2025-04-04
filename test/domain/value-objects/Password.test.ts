import { describe, test, it, expect } from 'vitest';
import {Password} from "../../../domain/value-objects/Password";

describe('Password', ()=>{
    it('should create a password with valid password',()=>{
        const validPassword = 'fede12345';
        const passwordinstance = Password.create(validPassword);
        expect(passwordinstance).toBeInstanceOf(Password);
        expect(passwordinstance.value).equals(validPassword);
    });

    it('sholud throw an error if passwors is missing', ()=>{
        const emptyPassword = '';
        expect(()=>Password.create(emptyPassword)).toThrowError('Password is empty');
    });

    it('should throw an error if password is invalid', ()=>{
        const invalidPassword = 'w';
        expect(()=>Password.create(invalidPassword)).toThrowError('Password is invalid');
    });

    it('should return true if instances are equals', ()=>{
        const instance1 = Password.create('fede1234');
        const instance2 = Password.create('fede1234');
        const areEquals = instance1.equals(instance2);
        expect(areEquals).toBe(true);
    });

    it('should return false if instances are not equals', ()=>{
        const instance1 = Password.create('fede1234');
        const instance2 = Password.create('fede1ww34');
        const areEquals = instance1.equals(instance2);
        expect(areEquals).toBe(false);
    });
})