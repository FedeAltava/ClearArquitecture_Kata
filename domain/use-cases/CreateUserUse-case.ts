import { User } from "@/entities/User";
import { RepositoryUser } from "@/repositories/RepositoryUser";
import { UserAlreadyExistsError, UserSameEmailDomainError, ErrorCreatingUser } from "errors/errors";


export class CreateUserCase {
    constructor(private repositoryUser: RepositoryUser) { }
    async execute(user: User): Promise<void> {
        try {
                const userExists = await this.repositoryUser.getByEmail(user.email.value);
                if (userExists) {
                    throw new UserAlreadyExistsError();
                }

                const userSameDomain = await this.repositoryUser.getByDomain(user.email.value);
                if (userSameDomain) {
                    throw new UserSameEmailDomainError();
                }

                await this.repositoryUser.create(user);
        } catch (error) {
                if (error instanceof UserAlreadyExistsError || error instanceof UserSameEmailDomainError) {
                    throw error;
                }
                throw new ErrorCreatingUser();
        }
    }
} 
