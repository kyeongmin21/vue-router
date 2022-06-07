const route = {
  path: '/shop',
  name:'shop',
  component: () => import(/* webpackChunkName: "shop" */ '@/views/category/Shop'),
  children: [
    {
      path: 'outer',
      alias: '',
      name: 'outer',
      component: () => import(/* webpackChunkName: "outer" */ '@/views/category/Outer'),
      prop: true
    },
    {
      path: 'top',
      alias: '',
      name: 'top',
      component: () => import(/* webpackChunkName: "top" */ '@/views/category/Top'),
      prop: true
    }
  ]
}

export default route
