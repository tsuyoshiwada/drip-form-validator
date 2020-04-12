import createNormalizeTester from './createNormalizeTester';

const normalizer = 'min';
const tester = createNormalizeTester(normalizer);

describe(`Normalizers#${normalizer}`, () => {
  it('Should be normalize', () => {
    tester([
      { value: null, params: 5, expect: null },
      { value: undefined, params: 5, expect: undefined },
      { value: NaN, params: 5, expect: NaN },
      { value: 0, params: 5, expect: 5 },
      { value: 10, params: 5, expect: 10 },
      { value: '3', params: 5, expect: 5 },
      { value: '10', params: 5, expect: 10 },
      { value: 0.14, params: 0.5, expect: 0.5 },
      { value: 'foo', params: 5, expect: 'foo' },
    ]);
  });
});
