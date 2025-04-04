// tests/entities/User.test.ts
import { describe, it, expect } from 'vitest';
import { User } from '../../../domain/entities/User';

describe('User Entity', ()=>{
    const validUserData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'Passw0rd2',
      };
    
      it("should create an instance of user", () => {
        const user = User.create(validUserData)
    
        expect(user).toBeInstanceOf(User)
      })
    
    
    it('should throw an error if email is invalid during creation',()=>{
        const userDataWithoutemail = {
            ...validUserData,
            email:'invalid email'
        };

        expect(()=>User.create(userDataWithoutemail)).toThrowError("email is invalid")
    });

    it('should throw an error if email is missing during creation',()=>{
        const userDataWithoutemail = {
            ...validUserData,
            email:''
        };

        expect(()=>User.create(userDataWithoutemail)).toThrowError("email is required")
    });

    
    it('should throw an error if name is minor than 2 characters during creation',()=>{
        const userDataInvalidName = {
            ...validUserData,
            name : 'r',
        }
        expect(()=>User.create(userDataInvalidName)).toThrowError("Name is invalid")
    });

    it('should throw an error if name is greater than 15 characters during creation',()=>{
        const userDataInvalidName = {
            ...validUserData,
            name : 'poiujdftiodfiofd',
        }
        expect(()=>User.create(userDataInvalidName)).toThrowError("Name is invalid")
    });

    it('should throw an error if name is mising during creation',()=>{
        const userDataInvalidName = {
            ...validUserData,
            name : '',
        }
        expect(()=>User.create(userDataInvalidName)).toThrowError("Name is required")
    });

    it('should throw an error if password is invalid during creation',()=>{
        const userDataWithInvalidPassword = {
            ...validUserData,
            password:'Ps'
        }
        expect(()=>User.create(userDataWithInvalidPassword)).toThrowError("Password is invalid")
    });

    it('should throw an error if password is missing during creation',()=>{
        const userDataWithInvalidPassword = {
            ...validUserData,
            password:''
        }
        expect(()=>User.create(userDataWithInvalidPassword)).toThrowError("Password is empty")
    });

    it('should update', ()=>{
        const initialUserProps = {
            ...validUserData
        }
        const userInstance = User.create(initialUserProps);

        const updatedUserData = {
            name: 'fede',
            email: 'kk@kk.com',
            password: 'mipalo1234mipne'
        }
        
        const updatedUser = userInstance.update(updatedUserData)
        expect(updatedUser.name.value).toBe(updatedUserData.name)
        expect(updatedUser.email.value).toBe(updatedUserData.email)
        expect(updatedUser.password.value).toBe(updatedUserData.password)
    })

    it('should update only the name', ()=>{
        const initialUserProps = {
            ...validUserData
        }
        const userInstance = User.create(initialUserProps);

        const updatedUserData = {
            name: 'fede',
        }
        
        const updatedUser = userInstance.update(updatedUserData)
        expect(updatedUser.name.value).toBe("fede")
        expect(updatedUser.password.value).toBe(userInstance.password.value)
    });

    it('should return true if entities are equal',()=>{
        const initialUserProps = {
            ...validUserData,
            id : 'newId1234',
        };
        const instance1 = User.create(initialUserProps);
        const instance2 = User.create(initialUserProps)
        const equalentities = instance1.equals(instance2);
        expect(equalentities).toBe(true);

    })
    it('should return false if entities are not equal',()=>{
        const initialUserProps = {
            ...validUserData
        }
        const instance1 = User.create(initialUserProps);
        const instance2 = User.create(initialUserProps);
        const equalentities = instance1.equals(instance2);
        expect(equalentities).toBe(false);
    })
})