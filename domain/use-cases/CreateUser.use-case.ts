import { User } from "@/entities/User";
import { RepositoryUser } from "@/repositories/RepositoryUser";
import { UserAlreadyExistsError, UserSameEmailDomainError, ErrorCreatingUser } from "@/errors/errors";


export class CreateUserCase {
    constructor(private repositoruUser: RepositoryUser) { }
    async execute(user: User): Promise<void> {
        try {
                const userExists = await this.repositoruUser.getByEmail(user.email.value);
                if (userExists) {
                    throw new UserAlreadyExistsError();
                }

                const UserSameDomain = await this.repositoruUser.getByDomain(user.email.value);
                if (UserSameDomain) {
                    throw new UserSameEmailDomainError();
                }

                await this.repositoruUser.create(user);
        } catch (error) {
                if (error instanceof UserAlreadyExistsError || error instanceof UserSameEmailDomainError) {
                    throw error;
                }
                throw new ErrorCreatingUser();
        }
    }
} 
