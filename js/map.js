let map = new Map([[1,"one"], [2,"two"], [3,"three"]]);
map.set(4, "four");

// 获取所有键值对
console.log("获取key")
console.log([...map.keys()]) // 输出[1, 2, 3, 4]

console.log("获取value")
console.log([...map.values()]) // 输出[one, two, three, four]

console.log("获取map数组")
console.log([...map])

// 快排
let a  = [1, 2, 5]
let b = [2, 5, 4]
let c = [...a,...b].sort()
console.log(c) //[1, 2, 2, 4, 5, 5]

// 去重
const distinct = arr => arr.filter((element, index, self) =>{
    return self.indexOf(element) === index
});
let arr = [1, 3, 5, 3, 6, 7, 2, 4, 5, 8]
distinct(arr)


let e = [1, 3, 5, 3, 6, 7, 2, 4, 5, 8]
let f = [...new Set(e)]
console.log(f)
e.filter((o,i)=>e.indexOf(o) === i)