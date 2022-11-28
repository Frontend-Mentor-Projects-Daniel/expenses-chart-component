/**
 *  Can be used to return a custom error message, should be used with the throw keyword. Contains a default error message if one isn't passed in
 * @example throw new validationError
 */
export class validationError {
  /** @param message - The message to return on error */
  constructor(public message: string = 'ERROR ERROR') {
    this.message = message;
  }
}

/**
 * A function that will make sure either an error object is passed in or will give a string version of what ever was passed in
 * @remarks In order to satisfy typescripts compiler as it will throw an error if we attempt to use the try...catch block
 * @param error - An instance of the Error class
 * @returns Either the message property of the error object or a string version of the error if something that wasn't an error object was passed in
 */
export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
