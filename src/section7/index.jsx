import  React  from 'react' ;
import './style.css';
import front from '../asset/family-illustration-1.png';
import shield_blue from '../asset/shield-1.png'

const Section7 = () => {
    return(
    <div id="bg">
        <div className="flex" style={{width:"100%"}}>
            <div className="box-accordion">
                <div id="accordion" className="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What are the documents required for claming?
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            A pre-authorization is required in case of clashess claims wich are to be
                            submitted to the TPA. Other documents might also be required and you should
                            have the knowledge of tje required documents
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Which are the network hospitals in your vicinity?
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            A pre-authorization is required in case of clashess claims wich are to be
                            submitted to the TPA. Other documents might also be required and you should
                            have the knowledge of tje required documents
                        </div>
                        </div>
                    </div>
                    <div class="card">
                            <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Will I get covered for my pre-existing illnesses?
                                </button>
                            </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                A pre-authorization is required in case of clashess claims wich are to be
                                submitted to the TPA. Other documents might also be required and you should
                                have the knowledge of tje required documents
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Is maternity covered in heath insurance policies?
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    A pre-authorization is required in case of clashess claims wich are to be
                                    submitted to the TPA. Other documents might also be required and you should
                                    have the knowledge of tje required documents
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex-end">
                <img src= {front} alt='family' height="800px" width="auto"/>
            </div>
        </div>
        <div className='flex parent' style={{position:'absolute', top:"45%", left:"50%", transform:"translateX(-50%)"}}>
            <div >
                <img className="img" src={shield_blue} alt="shied" height="60px"/>
            </div>
            <div className='flex child'>
                <div>
                    <h3>100% Satisfaction Guarantee</h3>
                    <small>We offer no questions asked refund policy for 14 days from the policy date.</small>
                </div>
                <button className="button">Get your free Quote</button>
            </div>
        </div>
    </div>
    
    )
}

export default Section7;