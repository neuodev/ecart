export default class ErrorResponse extends Error {
  public statusCode: number;

  constructor(message, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
