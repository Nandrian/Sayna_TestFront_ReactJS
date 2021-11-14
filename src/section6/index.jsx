import  React  from 'react' ;
import './style.css';
import checkbox from '../asset/check-box.svg'

const Section6 = () => {
    return(
        <div className="bg" style={{padding:'75px'}}>
            <div className="text-center">
                <h1>Honest Pricing</h1>
                <small>Simple and honest pricing. No hidden fees</small>
            </div>
            <div className='box'>
                <div className='flex' style={{maxWidth:"1300px", justifyContent:'center', marginTop:'75px'  }}>
                    <div className="new_card">
                        <p className='para'>Basic</p>
                        <p className="fs"> 9</p><span className="dollars">$</span>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Rapidiously strategize value</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Progressively visualize leadershiip</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Equity invested supply chains</small>
                        </div>
                        <div className="center">
                            <button className="btn-1">Choose plan</button>
                        </div>
                        {/* <button className="btn-1">Choose plan</button> */}
                    </div>
                    <div className="new_card" style={{transform: 'translateY(-20px)'}}>
                        <p className='para' style={{color:'#f5a973'}}>Profesionnal</p>
                        <p className="fs1"> 19</p><span className="dollarsPro">$</span>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px" style={{transform:"none"}}/>
                            <small>Rapidiously strategize value</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Progressively visualize leadershiip</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Equity invested supply chains</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Proactively leverage</small>
                        </div>
                        <div className="center">
                            <button className="btn-1" style={{backgroundColor:'#f5a973'}}>Choose plan</button>
                        </div>
                    </div>
                    <div className="new_card">
                        <p className='para' style={{color:'#6b60ec'}}>Premium</p>
                        <p className="fs2"> 49</p><span className="dollarsPrem">$</span>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px" style={{transform:"none"}}/>
                            <small>Rapidiously strategize value</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Progressively visualize leadershiip</small>
                        </div>
                        <div className="flex" style={{margin:"10px auto"}}>
                            <img className="imageCheck" src={checkbox} alt="svg" width="15px" height="15px"  style={{transform:"none"}}/>
                            <small>Equity invested supply chains</small>
                        </div>
                        <div className="center">
                            <button className="btn-1" style={{backgroundColor:'#887fef'}}>Choose plan</button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <small className="text-center">Prices shown per month if paid annually</small>
                </div>
            </div>
            
        </div>
    )
}

export default Section6