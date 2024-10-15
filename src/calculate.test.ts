import { Calculator } from "./calculator";
describe('String Calculator', () => {
  let calculator: Calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });
});
