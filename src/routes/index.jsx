import Home from '../pages/home';
import Validate from '../pages/validate';
import Wishlist from '../pages/wishlist';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Account from '../pages/account';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/notfound';
import ProductDetail from '../pages/productdetail';

const publicRoutes = [
    { path: '/', component: Home, id: 1 },
    { path: '/validate', component: Validate, id: 2 },
    { path: '/wishlist', component: Wishlist, id: 3 },
    { path: '/cart', component: Cart, id: 4 },
    { path: '/checkout', component: Checkout, id: 5 },
    { path: '/account', component: Account, id: 6 },
    { path: '/about', component: About, id: 7 },
    { path: '/contact', component: Contact, id: 8 },
    { path: '/notfound', component: NotFound, id: 9 },
    { path: '/productdetail', component: ProductDetail, id: 10 }
]

export {publicRoutes}