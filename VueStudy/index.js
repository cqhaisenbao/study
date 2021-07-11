import Vue from "../vue/vue.esm";

const app = new Vue({
    el: '#app',
    mounted() {
    },
    data: {
        n: 1
    },
    methods: {
        add() {
            this.n += 1
        }
    },
    render(h) {
        return h('div', {}, 123456)
    },
    template: `<div>{{n}}<button @click="add">add</button></div>`
})
