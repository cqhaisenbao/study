const obj1 = {
    name: 'jack',
    age: 3,
    family: {
        father: {
            age: 30,
            habit: {
                play: 'football',
                game: 'lol'
            }
        },
        mom: {
            city: 'wuhan',
            password: [1, 4, 6]
        },
    },
    sayHi: () => console.log('hi')
}

function deepClone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (let i in target) {
            cloneTarget[i] = deepClone(target[i])
        }
        return cloneTarget
    } else {
        return target
    }
}

const obj2 = deepClone(obj1)
obj1.family.father.age = 40
console.log(obj2);
console.log(obj2.sayHi === obj1.sayHi);
