import NaCard from "./NaCard"
import "./NewArrival.scss"

const NewArrival = () => {
  return (
    <div className="na-wrapper">
        <div className="slide-header">
            <div className="slide-header--container">
                <div className="slide-header--tag">
                    <div className="slide-marker"></div>
                    <span className="slide-header--type">Featured</span>
                </div>
                    <span className="slide-header--title">New Arrival</span>
            </div>
        </div>
          
        <div className="na-container">
            <NaCard></NaCard>       
        </div>
    </div>
  )
}

export default NewArrival