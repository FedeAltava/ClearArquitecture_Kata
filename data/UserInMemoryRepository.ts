import { User } from "@/entities/User";
import { RepositoryUser } from "@/repositories/RepositoryUser";


export class UserInMemoryRepository implements RepositoryUser{
    private users:User[];
    constructor(){
       this.users = []
    }
    async create(user: User): Promise <void> {
        this.users.push(user)
    }

    async delete(userToDelete: User): Promise<void> {
        this.users = this.users.filter(user=>user.id !== userToDelete.id);

    }

    async list(): Promise<User[]> {
        return this.users.map(user=>user)
    }
    async getByEmail(email: string): Promise<User> {
        const user = this.users.find(user=>user.email.value === email);
        if(!user){
            throw new Error("User not found by provider email");
            
        }
        return user;
    }
    async getByDomain(email: string): Promise<User> {
        const domain = email.split('@')[1];
        const user = this.users.find(user=>user.email.value.includes(domain));
        if(!user){
            throw new Error("User not found by provider email");
            
        }
        return user;
    }
    
}