import * as storageHelpers from '../localStorageHelper';

/**
 * NOTE I din't wont to mock local storage,
 * remove all values after test is done
 */

describe('storage helper', () => {
  afterEach(() => {
    storageHelpers.removeStorageValue('key');
  });

  it('should set value in storage', () => {
    storageHelpers.setStorageValue('key', 'test');
    expect(storageHelpers.getStorageValue('key')).toBe('test');
  });

  it('should return empty string if no value in storage', () => {
    expect(storageHelpers.getStorageValue('key')).toBe('');
  });
  /** This test is redundant because second test is already testing this */
  it('should set value in storage and remove it', () => {
    storageHelpers.setStorageValue('key', 'test');
    expect(storageHelpers.getStorageValue('key')).toBe('test');
    storageHelpers.removeStorageValue('key');
    expect(storageHelpers.getStorageValue('key')).toBe('');
  });
});
