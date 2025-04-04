import { User } from "@/entities/User";

export interface RepositoryUser {
    create(user:User):Promise<void>;
    delete(user:User):Promise<void>
    list():Promise<User[]>;
    getByEmail(email:string):Promise<User>;
    getByDomain(email:string):Promise<User>;
}