import createNormalizeTester from './createNormalizeTester';

const normalizer = 'unescape';
const tester = createNormalizeTester(normalizer);

describe(`Normalizers#${normalizer}`, () => {
  it('Should be normalize', () => {
    tester([
      { value: null, params: true, expect: '' },
      { value: undefined, params: true, expect: '' },
      { value: 0, params: true, expect: '0' },
      { value: '&lt;script&gt; alert(&quot;xss&amp;fun&quot;); &lt;&#x2F;script&gt;', params: true, expect: '<script> alert("xss&fun"); </script>' },
    ]);
  });
});
