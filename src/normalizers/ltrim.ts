import ltrim = require('validator/lib/ltrim');
import Validator from '../Validator';
import { isString, isNumber } from '../internal/utils';

Validator.registerNormalizer('ltrim', (value: any, chars: string | boolean) => {
  if (!isString(value) && !isNumber(value)) {
    return value;
  }

  return ltrim(`${value}`, isString(chars) ? chars : undefined);
});
