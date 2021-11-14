import  React  from 'react' ;
import './style.css'
// import bleu from '../asset/after-blue.png'
// import pink from '../asset/after-pink.png'

const Section3 = () => {
    return(
        <div>
            <div className='text-center top'>
                <h1> Simplified Claims</h1>
                <p>Easy as One, Two, Three</p>
            </div>
            <div className="position">
                <div className="card-contents">
                    <div className="card00">
                        <p className="fs-1"> 1</p>
                        <h4>Report Claim</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className="card00">
                        <p className="fs-2"> 2</p>
                        <h4> Claim Processing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className="card00">
                        <p className="fs-3"> 3</p>
                        <h4>Final Settlement</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </div>
                {/* <img scr={bleu} alt='bleu'/>
                <img scr={pink} alt='pink'/> */}
            </div>
            
        </div>
    )
}

export default Section3 