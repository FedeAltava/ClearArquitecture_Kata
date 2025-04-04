
export class UserAlreadyExistsError extends Error {
  constructor() {
    super("User already exists");
    this.name = "UserAlreadyExistsError";
  }
}

export class UserSameEmailDomainError extends Error {
  constructor() {
    super("User with same email domain already exists");
    this.name = "UserSameEmailDomainError";
  }
}

export class ErrorCreatingUser extends Error {
  constructor() {
    super("Error creating user");
    this.name = "ErrorCreatingUser";
  }


}
export class ErrorDeletingUser extends Error {
  constructor() {
    super("Error deleting user");
    this.name = "ErrorDeletingUser";
  }
}