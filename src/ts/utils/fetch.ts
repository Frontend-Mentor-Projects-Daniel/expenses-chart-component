// import { barData } from './types';
import { validationError, getErrorMessage } from './errors';

/**
 *  An asynchronous function used to fetch the data.json file within src/data directory
 * @param url - The resource to fetch
 * @returns A promise which wraps whatever is returned by the fetch request
 */
export async function getExpenses<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new validationError(getErrorMessage(error));
  }
}
