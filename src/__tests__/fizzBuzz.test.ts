
import fizzBuzz from '..';

test('Input of 1', () => {
  const result = fizzBuzz(1);
  expect(result).toBe('1');
});

test('Input of 2', () => {
  const result = fizzBuzz(2);
  expect(result).toBe('2');
});

test('Input of 3', () => {
  const result = fizzBuzz(3);
  expect(result).toBe('Fizz');
});

test('Input of 4', () => {
  const result = fizzBuzz(4);
  expect(result).toBe('4');
});

test('Input of 5', () => {
  const result = fizzBuzz(5);
  expect(result).toBe('Buzz');
});

test('Input of 6', () => {
  const result = fizzBuzz(6);
  expect(result).toBe('Fizz');
});

test('Input of 7', () => {
  const result = fizzBuzz(7);
  expect(result).toBe('7');
});

test('Input of 8', () => {
  const result = fizzBuzz(8);
  expect(result).toBe('8');
});

test('Input of 9', () => {
  const result = fizzBuzz(9);
  expect(result).toBe('Fizz');
});

test('Input of 10', () => {
  const result = fizzBuzz(10);
  expect(result).toBe('Buzz');
});

test('Input of 11', () => {
  const result = fizzBuzz(11);
  expect(result).toBe('11');
});

test('Input of 12', () => {
  const result = fizzBuzz(12);
  expect(result).toBe('Fizz');
});

test('Input of 13', () => {
  const result = fizzBuzz(13);
  expect(result).toBe('13');
});

test('Input of 14', () => {
  const result = fizzBuzz(14);
  expect(result).toBe('14');
});

test('Input of 15', () => {
  const result = fizzBuzz(15);
  expect(result).toBe('FizzBuzz');
});

test('Input of 16', () => {
  const result = fizzBuzz(16);
  expect(result).toBe('16');
});
