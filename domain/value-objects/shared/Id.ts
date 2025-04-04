export class Id {
    private readonly _id: string;

    constructor(value: string) {
      this._id = value;
    }
    get value(): string {
      return this.value;
    }
  
    public static generate(): Id {
      const random = Math.random().toString(36).substring(7);
      return new Id(random);
    }
    public static create(id:string){
      return new Id(id);
    }

    equals(id?: Id): boolean {
      if (id === null || id === undefined) {
        return false;
      }

      return this._id === id._id;
    }
}