import  React  from 'react' ;
import './style.css';
import bg from '../asset/bg-image3.png'
import quote from '../asset/quote.png'

const Section4 = () => {
    return(
        <div className="body1">
            <div className="fond">
                <img src={bg} alt='bg' width="75%"/>
            </div>
            <div className="quote">
                <img src={quote} alt='quote' />
                <p className='font'>
                    I need to understand what's going on - it's my health and I want to feel secure in it.
                    With my previous health insurance, I didn't know how any of it worked.
                </p>
                <p>Matthew Young</p>
                <small>Legal Consultant, United States</small>
            </div>
            
        </div>
    )
}

export default Section4;