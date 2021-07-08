//proxy
// let obj = {}
// let p = new Proxy(obj, {})
// p.name = 'tom'
// console.log(obj.name)

//get
// let arr = [1, 2, 3]
// arr = new Proxy(arr, {
//     get(target, prop) {
//         return prop in target ? target[prop] : 'error'
//     }
// })
// console.log(arr[1])  //target是arr，prop是1

//set
// let arr = {}
// arr = new Proxy(arr, {
//     set(target, prop, value) {
//         console.log(prop, value);
//     }
// })
//
// arr.name = 'tom'

let f1 = () => {
    console.log(this.name)
}

f1 = new Proxy(f1, {
    apply(target, thisArg, argArray) {
        console.log(thisArg);
    }
})

const obj = {
    name: 'tom',
    print: f1
}

f1()


