// 数组去重
// 以下是其中的几种常见方法：

// 1. 使用 Set
// Set 是 JavaScript 中一个内建的对象，它只允许存储唯一的值。
function uniqueArray(arr) {
  return [...new Set(arr)];
}

// 2. 使用 filter
function uniqueArray(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
// 注意：这个方法在处理大数组时可能效率不高，因为它需要对每个元素都调用 indexOf 方法，而这个方法本身的时间复杂度就是 O(n)

// 3. 使用 reduce
function uniqueArray(arr) {
  return arr.reduce((resList, item) => {
    if (!resList.includes(item)) {
      resList.push(item);
    }
    return resList;
  }, []);
}
