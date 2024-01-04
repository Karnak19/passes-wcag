/* global describe, it */
import { describe, it, assert } from 'vitest';

import { passesWcagAaLargeText, passesWcagAa, passesWcagAaa } from '../src/wcag';

describe('passes-wcag', () => {
  describe('passesWcagAaLargeText', () => {
    it('#333 on #777 does not pass wcag aa for large text', () => {
      assert.equal(false, passesWcagAaLargeText('#333', '#777'));
    });
    it('gray on rgb(250, 248, 247) passes wcag aa for large text', () => {
      assert(passesWcagAaLargeText('gray', 'rgb(250, 248, 247)'));
    });
  });
  describe('passesWcagAa', () => {
    it('gray on rgb(250, 248, 247) fails wcag aa', () => {
      assert.equal(false, passesWcagAa('gray', 'rgb(250, 248, 247)'));
    });
    it('black on darkgoldenrod passes wcag aa', () => {
      assert(passesWcagAa('black', 'darkgoldenrod'));
    });
  });
  describe('passesWcagAaa', () => {
    it('black on darkgoldenrod fails wcag aaa', () => {
      assert.equal(false, passesWcagAaa('black', 'darkgoldenrod'));
    });
    it('black on rgb(0, 0, 0) fails wcag aaa', () => {
      assert.equal(false, passesWcagAaa('black', 'rgb(0, 0, 0)'));
    });
    it('rgb(255, 255, 255) on rgb(0, 0, 0) passes wcag aaa', () => {
      assert.equal(false, passesWcagAaa('black', 'rgb(0, 0, 0)'));
    });
  });
});
