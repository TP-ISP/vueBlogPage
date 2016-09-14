module.exports = {
  '/': {
    component: require('./components/index')
  },
   '/list': {
    component: require('./components/list')
  },
  '/item': {
  	component: require('./components/item')
  },
  '*': {
    component: require('./components/notFound')
  }
}
