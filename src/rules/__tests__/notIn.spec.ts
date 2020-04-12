import createRuleTester from './createRuleTester';

const ruleName = 'notIn';
const tester = createRuleTester(ruleName);

describe(`Rules#${ruleName}`, () => {
  it('Should be return true', () => {
    tester(true, [
      { value: '', params: ['hoge'] },
      { value: 'vue', params: ['vanilla', 'angular', 'react'] },
      { value: 3, params: [10, 8, 6, 4, 2, 0] },
    ]);
  });

  it('Should be return false', () => {
    tester(false, [
      { value: 'react', params: ['vanilla', 'angular', 'react'] },
      { value: 0, params: [10, 8, 6, 4, 2, 0] },
    ]);
  });
});
