import Validator, { Values } from '../Validator';
import { hasProp, isNumeric, isEmpty } from '../internal/utils';

Validator.registerRule('required', (value: any, _: any, field: string, values: Values) => {
  return hasProp(values, field) && isNumeric(value) ? true : !isEmpty(value);
}, {
  implicit: false,
});
