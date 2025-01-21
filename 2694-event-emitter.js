//Blog: https://www.allenliservice.online/leetcode-javascript-30-days-challenge-day27-2694-event-emitter/

// <strong>solution:</strong>
// 建立一個 eventMap 的物件來記錄事件和回調函式。

// -subscribe方法用於訂閱事件:
// 當訂閱事件時，確認 eventMap 物件是否已經存在該事件的key。
// 如果不存在，則創建一個 new Set() 來存儲該事件的回調函式。
// 然後，將回調函式加入到相應事件的 Set() 中。
// 最後，回傳一個具有 unsubscribe 方法的物件，該方法可以用於取消訂閱。
// 當呼叫 unsubscribe 方法時，它會從相應事件的 Set 中刪除該回調函式。

// -emit方法用於觸發事件：
// 它接受一個事件名稱和一個可選的參數陣列作為參數。
// 該方法首先檢查 eventMap 物件中是否存在該事件的 key。
// 如果不存在，則回傳一個空陣列表示沒有回調函式被訂閱該事件。
// 否則，它遍歷該事件的回調函式集合，並依序將結果加入到一個陣列中，最後回傳陣列結果。

// <strong>Code 1: BigO(1)</strong>
class EventEmitter {
  eventMap = {};
  subscribe(event, cb) {
    if (!this.eventMap.hasOwnProperty(event)) {
      this.eventMap[event] = new Set();
    }
    this.eventMap[event].add(cb);

    return {
      unsubscribe: () => {
        this.eventMap[event].delete(cb);
      },
    };
  }

  emit(event, args = []) {
    const res = [];
    (this.eventMap[event] ?? []).forEach((cb) => res.push(cb(...args)));
    return res;
  }
}

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
const emitter = new EventEmitter();
console.log(emitter.emit("firstEvent")); // [], no callback are subscribed yet
console.log(emitter.subscribe("firstEvent", function cb1() { return 5; }));
console.log(emitter.subscribe("firstEvent", function cb2() { return 6; }));
console.log(emitter.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2
</pre>

<strong>Example 2</strong>
<pre style='background-color:#ggg'>
const emitter = new EventEmitter();
console.log(emitter.subscribe("firstEvent", function cb1(...args) { return args.join(','); }));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
console.log(emitter.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]
</pre>

<strong>Example 3</strong>
<pre style='background-color:#ggg'>
const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions
</pre>
 */
