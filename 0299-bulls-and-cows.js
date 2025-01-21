//Blog: https://www.allenliservice.online/leetcode-js-299-bulls-and-cows/

// <strong>Solution:</strong>
// 1. 宣告 bull 和 cow 分別為 0，sBox 和 gBox 為[]。
// (ex.個別計算正確的數量、正確 + 位置錯誤的數量，以及存放待確認數字的空間。
// 2. 將猜的數字進行一輪數字與位置的判定，皆符合，則 bull++，只要其中一個不符合，則存入空間。
// 3. 運用 indexOf 找出符合數字的位置，位置符合，則 cow++，當沒有符合的時候 indexOf會回傳 - 1，則不列入計算。
// 4. 回傳 xAyB。

// <strong>Code:</strong>
var getHint = function (secret, guess) {
  let bull = 0,
    cow = 0;
  let sBox = [],
    gBox = [];

  for (i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      bull++;
    } else {
      sBox.push(secret[i]);
      gBox.push(guess[i]);
    }
  }

  for (j = 0; j < gBox.length; j++) {
    let findIndex = sBox.indexOf(gBox[j]);

    if (findIndex !== -1) {
      cow++;
      sBox[findIndex] = null;
    }
  }
  return bull + "A" + cow + "B";
};

/* <strong>Example 1</strong>
Input: secret = "1807", guess = "7810"

step.1
                         secret = "1807", guess = "7810"
secret[1] === guess[1] =>           V               V
bull = 0 + 1 = 1
sBox = ["1", "0", "7"]
gBox = ["7", "1", "0"]

step.2
sBox = ["1", "0", "7"], gBox = ["7", "1", "0"]
         V                            V    
cow = 0 + 1 = 1

sBox = ["0", "7"], gBox = ["7", "0"]
         O                       O
cow = 1 + 1 = 2

sBox = ["7"], gBox = ["7"]
         #             #
cow = 2 + 1 = 3

return bull + "A" + cow + "B" => 1A3B
*/
