const _new = (fn, ...args) => {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, args);
    return ret instanceof Object ? ret : obj;
}

const Person = function (name, age) {
    this.name = name
    this.age = age
}

const p1 = new Person('tom', 18)

const p2 = _new(Person, 'jack', 18)