import { validateInput } from '../validationHelpers';

describe('validateInput helper', () => {
  it('should return false if input dont match regex', () => {
    expect(validateInput('')).toBe(false);
    expect(validateInput('   ')).toBe(false);
    expect(validateInput('  test')).toBe(false);
    expect(validateInput('123123312/32442-sad')).toBe(false);
    expect(validateInput('öööödasdasdyydsd')).toBe(false);
    expect(validateInput('734bdeded-')).toBe(false);
    expect(validateInput('72bdeded-cc832-4236-ba36-dcccedf85e6f')).toBe(false);
    expect(validateInput('72bdeded-cc83-42366-ba36-dcccedf85e6f')).toBe(false);
    expect(validateInput('72bdeded-cc83-4236-ba36a-dcccedf85e6f')).toBe(false);
  });

  it('should return true if api is valid', () => {
    expect(validateInput('72bdeded-cc83-4236-ba36-dcccedf85e6f')).toBe(true);
    expect(validateInput('72bdeded-cc83-4236-ba36-dcccedf85e6fadasd')).toBe(true);
  });
});
