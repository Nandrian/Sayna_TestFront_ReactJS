import  React  from 'react' ;
import './style.css';
import shield from '../asset/shield-2.png'

const Section5 = () => {
    return(
        <div className='flex parent'>
            <div >
                <img className="img" src={shield} alt="shied" height="60px"/>
            </div>
            <div className='flex child'>
                <div>
                    <h3>100% Satisfaction Guarantee</h3>
                    <small>We offer no questions asked refund policy for 14 days from the policy date.</small>
                </div>
                <button className="button">Get your free Quote</button>
            </div>
        </div>
    )
}

export default Section5