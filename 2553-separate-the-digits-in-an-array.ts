function separateDigits(nums: number[]): number[] {
  let arr: number[] = [];
  let digit: number = 0;
  for (const num of nums) {
      let s: string = String(num);
      while (s.length > 0) {
          digit = Number(s.split('').shift());
          arr.push(digit);
          s = s.slice(1);
      }        
  }
  return arr;
};