export class Calculator {
  add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter;
    ({ delimiter, numbers } = this.delimiterCheck(numbers));
  
    const nums = numbers.split(delimiter).map(Number).filter(num=>num<1000);
    
    this.validateNegativeNumbers(nums);
  
    return nums.reduce((a, b) => a + b, 0);
  }

  private validateNegativeNumbers(nums: number[]) {
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  }
  
  private delimiterCheck(numbers: string) {
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers[2]);
      numbers = numbers.substring(delimiterEnd + 1);
    }
    return { delimiter, numbers };
  }
}