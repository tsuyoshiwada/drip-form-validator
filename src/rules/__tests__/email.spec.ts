import createRuleTester from './createRuleTester';

const ruleName = 'email';
const tester = createRuleTester(ruleName);

describe(`Rules#${ruleName}`, () => {
  it('Should be return true', () => {
    tester(true, [
      { value: 'example@mail.com' },
    ]);
  });

  it('Should be return false', () => {
    tester(false, [
      { value: undefined },
      { value: 0 },
      { value: '' },
      { value: 'example' },
      { value: '@mail.com' },
      { value: {} },
      { value: [] },
    ]);
  });
});
