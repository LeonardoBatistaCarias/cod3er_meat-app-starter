export class User {
  constructor(public email: string,
              public name: string,
              private password: string) {}

  matches(another: User): boolean {
    return another !== undefined &&
    another.email === this.email &&
    another.password === this.password
  }
}

export const users: {[key:string]: User} = {
  "leonardo@gmail.com": new User('leonardo@gmail.com', 'Leonardo', 'leonardo123'),
  "batista@gmail.com": new User('batista@gmail.com', 'Batista', 'batista123'),
}
