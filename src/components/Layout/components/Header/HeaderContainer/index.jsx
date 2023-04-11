import { Link } from 'react-router-dom'
import './HeaderContainer.scss'
import Logo from '~/assets/image/logo.png'
import Search from './Search'
import heartIcon from '~/assets/icons/heart.png'
import cartIcon from '~/assets/icons/shopping-cart.png'

const HeaderContainer = () => {
  return (
    <div className='header-content'>
      <div className='header-items--left'>
          <div className='logo-wrapper'>
            <Link
            to='./home'>
              <img
                src={Logo}
                alt="Logo"
                className='logo'>
              </img>
            </Link>
          </div>
          <div className='header-navbar'>
            <div className='nav-icon-1'>
              Home 
              <div className='underline'></div>
            </div>
            <div className='nav-icon-2'>
              Contact
              <div className='underline'></div>
            </div>
            <div className='nav-icon-1'>
              About
              <div className='underline'></div>
            </div>
            <div className='nav-icon-2'>
              Sign Up
              <div className='underline'></div>
            </div>
          </div>
      </div>
      <div className='header-items--right'>
          <Search></Search>
          <div className='header-icons'>
            <Link to='./wishlist' className='wishlist'>
              <img src={heartIcon}
                alt="wishlist"
                className='wishlist-icon'/>
            </Link>
            <Link to='./cart' className='cart'>
              <img src={cartIcon}
                alt="cart-icon"
                className='cart-icon'/>
            </Link>
            <Link to='./user'></Link>
          </div>
      </div>
    </div>
  )
}

export default HeaderContainer