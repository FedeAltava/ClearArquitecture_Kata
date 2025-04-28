import { RepositoryUser } from "@/repositories/RepositoryUser";
import { User } from "@/entities/User";
export class ListUsersUseCase {
    constructor(private repositoryUser: RepositoryUser) { }

    async execute(): Promise<User[]> {
        return this.repositoryUser.list();
    }
}