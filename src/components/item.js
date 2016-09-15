module.exports = {
  template: require('../templates/item.html'),

  props: ["id","name","excerpt"],

  data:function(){
      return {items:[{"id":1,"name":"John Doe","excerpt":"I'm John Doe, a vertically aligned type of guy."},{"id":2,"name":"Sansha","excerpt":"This is the second post."}]};
  },

  ready: function () {
  	console.log("item ready!");
  }
};
