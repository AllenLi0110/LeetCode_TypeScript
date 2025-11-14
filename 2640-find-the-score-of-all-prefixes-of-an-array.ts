function findPrefixScore(nums: number[]): number[] {
  const ans: number[] = [];
  let currentMax: number = 0;
  let totalScore: number = 0;

  for (const num of nums) {
      currentMax = Math.max(currentMax, num);
      const conver: number = num + currentMax;
      totalScore += conver;
      ans.push(totalScore);
  }
  return ans;
};