import Validator from '../Validator';

Validator.registerRule('alphaDash', (value: any) => {
  return /^[A-Za-z\d-_]+$/.test(value);
}, {
  depends: { string: true },
});
