export default class IllegalArgumentException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, IllegalArgumentException.prototype);
  }
}
