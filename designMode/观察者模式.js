// 观察者模式

// 保存状态，状态变化后触发所有观察者
class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }

    //获取state
    getState() {
        return this.state
    }

    //设置state，并且触发观察者
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }

    // 支持添加观察者
    attach(observer) {
        this.observers.push(observer)
    }
}

// 观察者
class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update() {
        console.log(`${this.name} update,state:${this.subject.getState()}`)
    }
}

//测试
let s = new Subject()
let o1 = new Observer('o1', s)
s.setState(1)

const arr=['a','b']

console.log('1',arr['a'])

