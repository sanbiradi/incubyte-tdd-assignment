export class Calculator {
  add(numbers: string): number {
    if (numbers === '') return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers[2]);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    const nums = numbers.split(delimiter);
    return nums.map(Number).reduce((a, b) => a + b, 0);
  }
   
}