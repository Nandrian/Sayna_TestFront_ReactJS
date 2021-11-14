import React from 'react';
import './style.css';
import checkbox from '../../asset/check-box.svg';
import family from '../../asset/health-family-1.png';

const Content = () => {
    return (
        <div>
            <div className="contained">
                <div className="left-content">
                    <img src={family} alt="#" className="" />
                </div>
                <div className='content01'>
                    <h4>Monotonectally deploy seamless data and ressource maximizing systems</h4>
                    <p> Great fro individuals and small families up to 4 members.</p>
                    <p>A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence
                        ,creativity and attention to detail to ensure you are getting the best "bang for you buck" each and every year.
                    </p>
                    <div className="flex">
                        <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px" />
                        <div >
                            <p className="marginNone">COMPREHENSIVE INSURANCE</p>
                            <p className="marginNone">Dinamically repurpose e-business users rather than granular product</p>
                        </div>

                    </div>
                    <div className="flex border">
                        <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px" />
                        <div>
                            <p className="marginNone">SUPPORT IS JUST A CALL AWAY</p>
                            <p className="marginNone">Rapidiously customize value-added platforms compliant action items</p>
                        </div>

                    </div>
                    <div className="flex">
                        <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px" />
                        <div>
                            <p className="marginNone">SAY GOODBYE TO PAPERWORK</p>
                            <p className="marginNone">Globally delive economically sound communities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;