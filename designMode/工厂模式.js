class Product {
    constructor(name) {
        this.name = name
    }

    init() {
        alert('init')
    }

    fn1() {
        alert('fn1')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

//生成工厂
const creator = new Creator()

//通过工厂生成product实例
const p = creator.create('jack')
