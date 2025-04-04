import { describe, test, it, expect } from 'vitest';
import {Name} from "../../../domain/value-objects/Name";

describe("Name", ()=>{

    it('should throw an error if name is missing', ()=>{
        const emptyName = '';
        expect(()=> Name.create(emptyName)).toThrow('Name is required')
    })

    it('should create an instance of Name', ()=>{
        const name = 'validName';
        const nameInstance = Name.create(name);
        expect(nameInstance).toBeInstanceOf(Name);
        expect(nameInstance.value).equals(name);
    })

    it('should format the name', ()=>{
        const name = ' validName ';
        const nameInstance = Name.create(name);
        expect(nameInstance).toBeInstanceOf(Name);
        expect(nameInstance.value).equals('validName');
    })

    it('should return true if instances are equal', ()=>{
        const name = 'validName';
        const nameinstance1 = Name.create(name);
        const nameInstance2 = Name.create(name);
        const equalsInstances = nameinstance1.equals(nameInstance2);
        expect(equalsInstances).toBe(true);
    })

    it('should return false if instances are not equal', ()=>{
        
        const nameinstance1 = Name.create('name');
        const nameInstance2 = Name.create('name2');
        const equalsInstances = nameinstance1.equals(nameInstance2);
        expect(equalsInstances).toBe(false);
    })
})