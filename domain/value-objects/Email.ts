import { ValueObject } from "./shared/value-object";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface emailProps {
  value: string;
}

export class Email extends ValueObject<emailProps> {
  get value(): string {
    return this.props.value;
  }
  constructor(email: emailProps) {
    super(email);
  }

  public static create(email: string): Email {
    if (!email) {
      throw new Error("email is required");
    }
    if (!EMAIL_PATTERN.test(email)) {
      throw new Error("email is invalid");
    }
    return new Email({ value: email.toLocaleLowerCase() });
  }
}
