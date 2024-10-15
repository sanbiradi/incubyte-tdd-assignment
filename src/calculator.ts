export class Calculator {
  add(numbers: string): number {
    if (numbers === '') return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers[2]);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return nums.reduce((a, b) => a + b, 0);
  }
    
   
}