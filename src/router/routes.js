const ListUser = () => import('../view/users/list.vue')
const ListProduct = () => import('../view/products/list.vue')

export default [
  {
    path: '/products',
    name: 'products',
    component: ListProduct
  }, {
    path: '/users',
    name: 'users',
    component: ListUser
  }
]
