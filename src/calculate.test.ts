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
  
  
});
