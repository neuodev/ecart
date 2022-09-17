export default class ErrorResponse extends Error {
  public statusCode: number;

  constructor(message, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
