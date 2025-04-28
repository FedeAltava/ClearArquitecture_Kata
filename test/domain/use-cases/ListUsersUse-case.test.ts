import { describe, it, expect, vi } from "vitest";
import { ListUsersUseCase } from "../../../domain/use-cases/ListUseresUse-case";

describe("ListUsersUse-case", () => {
    const validUserData = {
        name: "solomillo",
        email: "solomillo@gmail.com",
        password: "1234solomillo",
      };

      const secondvalidUserData = {
        name: "Carrilleras",
        email: "Carrilleras@gmail.com",
        password: "1234Carrilleras",
      };

  it("should list all users", async() => {
    let listUserCase:ListUsersUseCase;

    const mockUserRepository = {
      list: vi.fn().mockImplementation(()=>[validUserData,secondvalidUserData ]),
    };
    
    listUserCase = new ListUsersUseCase(mockUserRepository)
    const result = await listUserCase.execute();

    expect(mockUserRepository.list).toHaveBeenCalled();
    expect(result).toEqual([validUserData, secondvalidUserData]);

  });
});
