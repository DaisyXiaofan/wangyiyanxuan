import Index from '../pages/index/index'
import Cart from '../pages/cart/cart'
import Category from '../pages/category/category'
import Buy from '../pages/buy/buy'
import Personal from '../pages/personal/personal'
export default [
  { path: '/index', component: Index },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
  { path: '/buy', component: Buy },
  { path: '/personal', component: Personal },
  { path: '/', redirect: '/cart' }
]