function deepCopy(obj = {}) {
  // 判断 如果是值类型 则直接返回
  if (typeof obj !== 'Object' || obj == null) {
    return obj
  }
  //  初始化结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  // 使用递归
  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      result[key] = deepCopy(obj[key])
    }
  }
  return result;
}


let a = {
  name: '张三',
  age: 20,
  hobby: {
    hoby1: '打游戏',
    hoby2: '游泳'
  }
}
let b
b = deepCopy(a)
console.log(b);

// test 02
function deepCopy02(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      result[key] = deepCopy02(obj[key])
    }
  }
  return result;
}