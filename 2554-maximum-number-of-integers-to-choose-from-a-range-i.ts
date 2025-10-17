function maxCount(banned: number[], n: number, maxSum: number): number {
  const set: Set<number> = new Set(banned);    
  let sum: number = 0;
  let count: number = 0;
  
  for (let i = 1; i <= n; i++) {            
      if (set.has(i)) continue;
      if (sum + i > maxSum) break;
      sum += i;
      count++;
  }     
  return count;
};