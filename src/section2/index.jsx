import  React  from 'react' ;
import home from '../asset/home.png'
import car from '../asset/car-insurance-1.png'
import life from '../asset/life-insurance-1.png'
import business from '../asset/business-insurance-1.png'
import travel from '../asset/travel-insurance-1.png'
import other  from '../asset/other-insurance-1.png'

import './style.css'

const Section2 = () => {
    return(
        <div className='body'>
            <div className="text-center">
                <h1 className="marginNone">Choose your Insurance</h1>
                <p>Keep Your Life Smile, Safe, and Wealthy</p>
            </div>
            <div className="card-contents">
                <div className="card00">
                    <img src={home} alt='home'/>
                    <h4>Home Insurance</h4>
                    <p>
                        Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                    </p>
                </div>
                <div className="card00">
                    <img src={car} alt='car'/>
                    <h4>Car Insurance</h4>
                    <p>
                        Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                    </p>
                </div>
                <div className="card00">
                    <img src={life} alt='life'/>
                    <h4>life Insurance</h4>
                    <p>
                        Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                    </p>
                </div>
                <div className="card00">
                    <img src={business} alt='business'/>
                    <h4>business Insurance</h4>
                    <p>
                        Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                    </p>
                </div>
                <div className="card00">
                    <img src={travel} alt='travel'/>
                    <h4>travel Insurance</h4>
                    <p>
                        Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                    </p>
                </div>
                <div className="card00">
                    <img src={other} alt='other'/>
                    <h4>other Insurance</h4>
                    <p>
                        Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Section2