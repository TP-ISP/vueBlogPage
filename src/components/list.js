import item from "./item";

module.exports = {
  template: require('../templates/list.html'),

  data:function(){
      return {items:[{"avatar":1,"name":"John Doe","excerpt":"I'm John Doe, a vertically aligned type of guy."},{"avatar":2,"name":"Sansha","excerpt":"This is the second post."}]};
  },

  components:{
    "item":item
  },

  init: function (){
    console.log("init..");
  },
  created:function(){
      console.log("created..");
  },

  //在编译开始前调用。
  beforeCompile:function(){
       console.log("beforeCompile..");
  },

  //在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
  compiled:function(){
       console.log("compiled..");
  },

   //在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。
  ready: function () {
    console.log("ready..");

  },

  //在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会 触发这个钩子。
  attached:function(){
       console.log("attached..");
  },

  //在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。
  detached:function(){
       console.log("detached..");
  },

  //在开始销毁实例时调用。此时实例仍然有功能。
  beforeDestroy:function(){
       console.log("beforeDestroy..");
  },

  //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed 钩子在过渡完成之后调用。
  destroyed:function(){
       console.log("destroyed..");
  }
};
