import './Header.scss'
import HeaderContainer from './HeaderContainer'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <header className="wrapper">
      <div className="container">
        <TopHeader />
        <HeaderContainer />
      </div>
    </header>
  )
}

export default Header