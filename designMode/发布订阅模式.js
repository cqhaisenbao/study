class EventEmitter {
    constructor() {
        this.list = {}
    }

    on(event, fn) {
        // (this.list[event] || (this.list[event] = [])).push(fn);
        this.list[event]=[fn]
    }

    emit(eventName, ...argus) {
        this.list[eventName].forEach(fn => {
            fn(argus)
        })
    }

}

function user1(content) {
    console.log('用户1订阅了:', content);
};

const user2 = {
    publish: (content) => {
        console.log('用户2订阅了:', content);
    }
}

const $eventBus = new EventEmitter()
$eventBus.on('update', user1)
$eventBus.on('update', user2.publish)
$eventBus.emit('update', 123)
$eventBus.emit('update', 456)
