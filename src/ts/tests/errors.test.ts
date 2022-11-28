//@ts-check

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { validationError, getErrorMessage } from '../utils/errors';

describe('class validationError', () => {
  let val;
  beforeEach(() => {
    val = new validationError('ERROR, ERROR');
  });

  it('should be defined', () => {
    expect(val).toBeDefined();
  });

  it('should return an object with a message property when invoked', () => {
    expect(val).toBeTypeOf('object');
    expect(val).toHaveProperty('message');
  });

  it('should return the string "ERROR ERROR" if nothing gets passed in', () => {
    const val2 = new validationError();
    expect(val2.message).toBe('ERROR ERROR');
  });

  it('should return the passed in error message', () => {
    const val2 = new validationError('New Error Message');
    expect(val2.message).toBe('New Error Message');
  });
});

describe('getErrorMessage()', () => {
  it('should be defined', () => {
    expect(getErrorMessage).toBeDefined();
  });

  it('should return a string no matter what is passed in', () => {
    const result = getErrorMessage(Error('New Error Message'));
    const result2 = getErrorMessage(25);
    const result3 = getErrorMessage(new validationError('Error'));
    const result4 = getErrorMessage(['a', 25]);

    expect(result).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
    expect(result4).toBeTypeOf('string');
  });
});
