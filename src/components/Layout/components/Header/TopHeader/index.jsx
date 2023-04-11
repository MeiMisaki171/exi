import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './TopHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopHeader = () => {
  return (
    <div className='topheader-wrapper'>
      <div className='topheader-container'>
        <div className='topheader-title'>
          <div className='topheader-noti'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <a className='linkto' href='/'>ShopNow</a>
        </div>
        <div className='language'>
          <div className='current-lang'>English</div>
          <FontAwesomeIcon
            className='dropdown-menu'
            icon={faChevronDown}
          />
        </div>
      </div>
    </div>
  )
}

export default TopHeader