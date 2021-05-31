import { sayHello } from '../index';

test('should be able to test the say hello fn()', () => {
  expect(sayHello('ankit')).toEqual('hi ankit');
});
