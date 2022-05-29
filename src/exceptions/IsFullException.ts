import IllegalStateException from "./base/IllegalStateException";

export default class IsFullException extends IllegalStateException {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, IsFullException.prototype);
  }
}
