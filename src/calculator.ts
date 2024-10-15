export class Calculator {
  add(numbers: string): number {
    if (numbers === '') return 0;
    const nums = numbers.split(',');
    return nums.map(Number).reduce((a, b) => a + b, 0);
  }  
}