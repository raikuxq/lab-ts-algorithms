export default class IllegalStateException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, IllegalStateException.prototype);
  }
}
