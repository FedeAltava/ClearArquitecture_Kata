import { ValueObject } from "./shared/value-object";

export interface nameProps {
  value: string;
}

export class Name extends ValueObject<nameProps> {
  get value(): string {
    return this.props.value;
  }

  constructor(name: nameProps) {
    super(name);
  }
  public static create(name: string): Name {
    if (!name) {
      throw new Error("Name is required");
    }
    if (name.trim().length < 2 || name.trim().length > 15 ) {
      throw new Error("Name is invalid");
    }
    return new Name({ value: name.trim() });
  }
}
