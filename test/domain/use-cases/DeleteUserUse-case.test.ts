import { describe, it, expect, vi } from "vitest";
import { DeleteUser } from "../../../domain/use-cases/DeleteUserUse-case";
import { User } from "../../../domain/entities/User";

describe("DeleteUserUse-case", () => {
  const validUserData = {
    name: "solomillo",
    email: "solomillo@gmail.com",
    password: "1234solomillo",
  };

  const validUser = User.create(validUserData);

  it("should delete a user properly", async() => {
    const repositoryUserMock = {
        getByEmail: vi.fn().mockResolvedValue(validUser),  
        delete: vi.fn(), 
      };
  
      const deleteUserCase = new DeleteUser(repositoryUserMock);
  
      const user = await repositoryUserMock.getByEmail(validUserData.email);
      await deleteUserCase.execute(user);  
  

      expect(repositoryUserMock.delete).toHaveBeenCalledWith(user);
  });
});
