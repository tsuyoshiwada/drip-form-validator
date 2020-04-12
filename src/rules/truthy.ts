import Validator from '../Validator';

Validator.registerRule('truthy', (value: any) => {
  return ['yes', '1', 'true', 'ok', 'okay'].indexOf(`${value}`.toLowerCase()) > -1;
});
