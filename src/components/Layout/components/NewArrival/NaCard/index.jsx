import DATA5 from "../NaData/NaData"
import './NaCard.scss'

const NaCard = () => {
  return (
      <>
          {
              DATA5.map((item) => {
                  return (
                      <div className={ item.classname}>
                          <div className="na-content">
                              <div className="na-title">{item.title}</div>
                              <div className="na-detail">{item.detail}</div>
                              <div className="na-link">{ item.link }</div>
                          </div>
                          <img className="na-img" src={item.img} alt='img' />
                    </div>
                  )
              })
          }
      </>
  )
}

export default NaCard