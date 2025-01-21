//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day14-2622-cache-with-time-limit/

// <strong>solution:</strong>
// 我們先定義了一個 TimeLimitedCache 類別，它是一個有時間限制的結構。
// 它使用 Map 來儲存整數鍵。當呼叫 set 方法時，它會將整數鍵存入 cache 物件並設定一個計時器，
// 在指定的時間後自動刪除該項目。使用 get 方法可以獲取鍵對應的值，
// 並使用 count 方法計算 cache 中的項目數量。

// <strong>Code 1: prototype BigO(1)</strong>
var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExists = this.cache.get(key);
  if (alreadyExists) {
    clearTimeout(alreadyExists.timeoutId);
  }
  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);
  this.cache.set(key, {
    value,
    timeoutId,
  });
  return Boolean(alreadyExists);
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) return this.cache.get(key).value;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
["TimeLimitedCache", "set"       , "get", "count", "get"]
[       []         , [1, 42, 100], [1]  ,    []  , [1]  ]
[        0         ,       0     ,  50  ,    50  , 150  ]

1. null //建立 TimeLimitedCache 模型的物件。
2. false //建立 TimeLimitedCache.prototype.set(1, 42, 100) {}。
3. 42 //取得 TimeLimitedCache.prototype.get(42)。
4. 1 //回傳 TimeLimitedCache.prototype.count(1)。
5. -1 //超過時間，key失效，回傳-1。
=> [null, false, 42, 1, -1]
</pre> */

// <strong>Code 2: class BigO(1)</strong>
class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
    const alreadyExists = this.cache.get(key);
    if (alreadyExists) {
      clearTimeout(alreadyExists.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, {
      value,
      timeoutId,
    });
    return Boolean(alreadyExists);
  }

  get(key) {
    if (this.cache.has(key)) return this.cache.get(key).value;
    return -1;
  }

  count() {
    return this.cache.size;
  }
}
