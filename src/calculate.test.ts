import { Calculator } from "./calculator";
describe('String Calculator', () => {
  let calculator: Calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });
  
  test('should return the number when only one number is provided', () => {
    expect(calculator.add('1')).toBe(1);
  });

  test('should return the sum of two comma-separated numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
  });
  
  test('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should support different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });
  
  test('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2, -4');
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2, -4');
  });
  
  
});
