import { describe, it, expect, vi } from "vitest";
import { CreateUserCase } from "../../../domain/use-cases/CreateUserUse-case";
import { User } from "../../../domain/entities/User";

const validUserData = {
  name: "solomillo",
  email: "solomillo@gmail.com",
  password: "1234solomillo",
};

describe("CreateUserUse-case", () => {
  it("should throw an error if email already exists",async() => {

    const repositoryUserMock = {
      getByEmail: vi.fn().mockResolvedValue(true),
      getByDomain: vi.fn().mockResolvedValue(false),
      create: vi.fn(),
    };
    const userCase = new CreateUserCase(repositoryUserMock);
    const user = validUserData.email;
    await expect(userCase.execute(user)).rejects.toThrowError('Error creating user');
  });

  it("should throw an error if domain already exists",async() => {
    const repositoryUserMock = {
      getByEmail: vi.fn().mockResolvedValue(false),
      getByDomain: vi.fn().mockResolvedValue(true),
      create: vi.fn(),
    };
    const userCase = new CreateUserCase(repositoryUserMock);
    const user = User.create(validUserData);
    await expect(userCase.execute(user)).rejects.toThrowError('User with same email domain already exists');
  });

  it("should create a user",async() => {
    const repositoryUserMock = {
      getByEmail: vi.fn().mockResolvedValue(false),
      getByDomain: vi.fn().mockResolvedValue(false),
      create: vi.fn(),
    };
    const userCase = new CreateUserCase(repositoryUserMock);
    const user = User.create(validUserData);
    await userCase.execute(user);
    expect(repositoryUserMock.create).toHaveBeenCalled()
  });

});
