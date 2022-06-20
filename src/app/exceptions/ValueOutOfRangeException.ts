import IllegalArgumentException from "./base/IllegalArgumentException";

export default class ValueOutOfRangeException extends IllegalArgumentException {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, ValueOutOfRangeException.prototype);
  }
}
