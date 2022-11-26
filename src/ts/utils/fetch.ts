import { barData } from './types';

/**
 *  An asynchronous function used to fetch the data.json file within src/data directory
 * @param url - The resource to fetch
 * @returns A promise which wraps an array of objects that implement the barData interface
 */
export async function getExpenses(url: string): Promise<[barData]> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
