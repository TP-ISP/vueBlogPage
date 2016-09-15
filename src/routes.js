module.exports = {
  '/': {
    component: require('./components/index')
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
