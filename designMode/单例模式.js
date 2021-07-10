class SingleObject {
    login() {
        console.log('login')
    }

    static getInstance = (() => {
        let instance
        return function () {
            if (!instance) {
                instance = new SingleObject()
            }
            return instance
        }
    })()
}

const obj1 = SingleObject.getInstance()
obj1.login()
const obj2 = SingleObject.getInstance()
obj2.login()

console.log(obj1 === obj2)
