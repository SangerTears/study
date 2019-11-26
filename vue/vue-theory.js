// 响应式原理
// 响应式: Reactivity表示一个状态改变之后，如何改变整个系统，在实际项目应用场景中即数据儒文化动态改的

let a = 3;
let b = a * 10
console.log(b);

a = 4; 
console.log(a); // 4
console.log(b); // 30
b = a * 10;
console.log(b) // 40

// onAChange(()=>{
//     b = a * 10
// })

// <span>
//     {{state.a*10}}
// </span>
// onStateChanged(()=>{
//  view = render(state)
// })

const obj = { foo: 123}
convert(obj)

obj.foo
obj.foo = 234
obj.foo

function convert(obj) {
    Object.keys(obj).forEach(key =>{
        // 保存原始值
        let internalValue = obj[key]
        Object.defineProperty(obj, key,{
           get(){
               console.log()
           } 
        })
    })
}
let b = {}
a.forEach(o=>{
    b[o] = o
})
Object.keys(b)