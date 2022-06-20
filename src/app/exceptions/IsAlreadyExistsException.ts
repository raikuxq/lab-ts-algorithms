import IllegalStateException from "./base/IllegalStateException";

export default class IsAlreadyExistsException extends IllegalStateException {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, IsAlreadyExistsException.prototype);
  }
}
