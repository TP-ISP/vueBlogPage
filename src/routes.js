module.exports = {
  '/': {
    component: require('./components/index'),

    //子路由
    subRoutes:{
      "/":{
          component:require('./components/tab1')
      },
      "/tab1":{
          component:require('./components/tab1')
      },
      "/tab2":{
          component:require('./components/tab2')
      }
    }
  },
   '/list': {
    component: require('./components/list')
  },
  '/show/:id': {
    name:"show",
    component: require('./components/show')
  },
  '/item': {
  	component: require('./components/item')
  },
  '*': {
    component: require('./components/notFound')
  }
}
