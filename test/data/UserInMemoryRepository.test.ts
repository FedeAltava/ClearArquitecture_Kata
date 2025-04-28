import { describe, it, expect, beforeEach } from "vitest";
import { UserInMemoryRepository } from "../../data/UserInMemoryRepository";
import { User } from "../../domain/entities/User";

describe("UserInMemoryRepository", () => {
  const validUserData = {
    name: "solomillo",
    email: "solomillo@gmail.com",
    password: "1234solomillo",
  };
  const secondUserData = {
    name: "pepito",
    email: "pepito@gmail.com",
    password: "1234pepito",
  };
  const validUser = User.create(validUserData);
  const secondValidUser = User.create(secondUserData);
  let userRepository: UserInMemoryRepository;

  beforeEach(() => {
    userRepository = new UserInMemoryRepository();
  });

  it("should create a user succesfully", async () => {
    await userRepository.create(validUser);
    const users = await userRepository.list();
    expect(users[0].name).toBe(validUser.name);
  });

  it("should list all users of the array", async () => {

    await userRepository.create(validUser);
    await userRepository.create(secondValidUser);

    const users = await userRepository.list();
    expect(users.length).toBe(2);
  });

  it("should find a user by email", async () => {
    await userRepository.create(validUser);
    const user = await userRepository.getByEmail(validUserData.email);
    expect(user.email).toEqual(validUser.email);
  });

  it("should find a user by domain", async () => {
    await userRepository.create(validUser);
    const user = await userRepository.getByDomain(validUserData.email);
    expect(user.email).toEqual(validUser.email);
  });

  it("should delete a user properly", async () => {
    await userRepository.create(validUser);
    await userRepository.create(secondValidUser);

    await userRepository.delete(validUser);

    const users = await userRepository.list();


    expect(users.length).toBe(1);
  });
});
