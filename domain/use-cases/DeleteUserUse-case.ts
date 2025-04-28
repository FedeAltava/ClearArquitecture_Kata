import { RepositoryUser } from "@/repositories/RepositoryUser";
import { User } from "@/entities/User";
import { ErrorDeletingUser } from "errors/errors";

export class DeleteUser {
    constructor(private repositoryUser: RepositoryUser) { }

    async execute(user: User): Promise<void> {
        try {
            const userExists = await this.repositoryUser.getByEmail(user.email.value)
            if (!userExists) {
                throw new ErrorDeletingUser();
            }
            await this.repositoryUser.delete(user)
        } catch (error) {
            throw new ErrorDeletingUser();
        }
    }
}