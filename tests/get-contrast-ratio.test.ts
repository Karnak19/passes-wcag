import { describe, it, assert } from 'vitest';

import { getContrastRatio } from '../src/get-contrast-ratio';

describe('Get contrast ratio', () => {
  describe('Some reference values', () => {
    it('should return 21 for black on white', () => {
      assert.equal(getContrastRatio('black', 'white'), 21);
    });
    it('should return 1 for black on black', () => {
      assert.equal(getContrastRatio('black', 'black'), 1);
    });
    it('should return 1 for white on white', () => {
      assert.equal(getContrastRatio('white', 'white'), 1);
    });
    it('should return 1 for gray on gray', () => {
      assert.equal(getContrastRatio('#444', '#444444'), 1);
    });
    it('should return 2.14 for blue on red', () => {
      assert.equal(getContrastRatio('blue', 'red'), 2.14);
    });
  });
});
