import IllegalStateException from "./base/IllegalStateException";

export default class IsEmptyException extends IllegalStateException {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, IsEmptyException.prototype);
  }
}
