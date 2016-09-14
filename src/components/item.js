module.exports = {
  template: require('../templates/item.html'),

  data:function(){
      return {items:[{"avatar":1,"name":"John Doe","excerpt":"I'm John Doe, a vertically aligned type of guy."},{"avatar":2,"name":"Sansha","excerpt":"This is the second post."}]};
  },

  ready: function () {
  	console.log("item ready!");
  }
};
