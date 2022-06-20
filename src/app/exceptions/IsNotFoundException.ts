import IllegalStateException from "./base/IllegalStateException";

export default class IsNotFoundException extends IllegalStateException {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, IsNotFoundException.prototype);
  }
}
