import Vue from 'vue';

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
Vue.component('text-document',{
    props: ['title'],
    methods: {
        updateTitle: function() {
            var newTitle = "child";
            this.$emit('update:title', newTitle)
        }
    },
    template: '<div v-on:click="updateTitle">{{title}}</div>',
});
Vue.component('todo-list',{
    props:['todos'],
    template:`<ul>
                <li v-for="todo in todos" v-bind:key="todo.id">
                    <slot v-bind:todo="todo">
                        {{todo.text}}
                    </slot>
                </li>
            </ul>`
});
var data = {
    message: 'hello Vue!',
    seen: false,
    todos: [
        {id: 1, text: '学习javascript', isComplate: true, title: 'slot-title1'},
        {id: 2, text: '学习Vue', isComplate: true, title: 'slot-title2'},
        {id: 3, text: '学习整个项目', isComplate: false, title: 'slot-title3'}
    ],
    loginType: 'username',
    width: '60px',
    height: '30px',
    age:20,
    doc: {
        title: 'vue 双向绑定'
    }
}
var app = new Vue({
    el: '#app',
    data: data,
    methods: {
        reverseMessage: function() {
            console.log(this.message);
            this.message = this.message.split(' ').reverse().join(' ');
        },
        changeLogin: function() {
            this.seen = !this.seen;
            this.loginType = this.seen ? 'username': 'email'
        }
    }
});
app.message = "hello";
console.log(app);
console.log(app.$data);
console.log(app.todos === data.todos);

var aa = 100;
console.log("dddd");
console.log(this);
function parent(){
    console.log(this.aa);
    setTimeout(function(){
        console.log("sss=="+this.aa)
    },100);
}

parent.apply({aa: 20});
