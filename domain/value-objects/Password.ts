import { ValueObject } from "./shared/value-object";

const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export interface PasswordProps {
  value: string;
}

export class Password extends ValueObject<PasswordProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: PasswordProps) {
    super(props);
  }

  public static create(password: string): Password {
    if (!password) {
      throw new Error("Password is empty");
    }
    if (!PASSWORD_PATTERN.test(password)) {
      throw new Error("Password is invalid");
    }
    return new Password({ value: password });
  }

}
