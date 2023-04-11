import { Link } from 'react-router-dom'
import './Content.scss'
import DATA from '~/components/Layout/components/Content/Data/Data'

const Content = () => {
  return (
    <div className='content-table'>
          {
              DATA.map((item) => {
                  return (
                      <Link className='content-wrapper' to={item.path}>
                          <div className='content-item'>{item.title}</div>
                      </Link>
            )
        })}
    </div>
  )
}

export default Content