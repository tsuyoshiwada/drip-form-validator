import createNormalizeTester from './createNormalizeTester';

const normalizer = 'max';
const tester = createNormalizeTester(normalizer);

describe(`Normalizers#${normalizer}`, () => {
  it('Should be normalize', () => {
    tester([
      { value: null, params: 5, expect: null },
      { value: undefined, params: 5, expect: undefined },
      { value: NaN, params: 5, expect: NaN },
      { value: Infinity, params: 5, expect: 5 },
      { value: 10, params: 5, expect: 5 },
      { value: 4, params: 5, expect: 4 },
      { value: '6', params: 5, expect: 5 },
      { value: '2', params: 5, expect: 2 },
      { value: 0.6, params: 0.5, expect: 0.5 },
      { value: '0.6', params: 0.5, expect: 0.5 },
      { value: 'foo', params: 2, expect: 'foo' },
    ]);
  });
});
