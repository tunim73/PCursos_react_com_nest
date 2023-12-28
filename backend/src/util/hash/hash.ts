import * as bcrypt from 'bcrypt';

export class Hash {
  static async apply(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  static async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
