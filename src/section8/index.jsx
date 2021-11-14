import  React  from 'react' ;
import './style.css';

const Section8 = () => {
    return(
        <div className="container-fluid pt-5 " style={{backgroundColor:"#fafafa"}}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4>ADDRESS</h4>
                        <p>400-401 West Georgia Street</p>
                        <p>Vancouver, BC, Canada, V6B 5A1</p>
                        <p>+1(123) 456 7890</p>
                        <p>sales@insurance.com</p>
                    </div>
                    <div className="col-4">
                        <h4>FOLLOW US</h4>
                        <p>Twitter</p>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                        <p>Intagram</p>
                    </div>
                    <div className="col-4">
                        <h4>ABOUT US</h4>
                        <p>Compellingly myocardinate market-driven infrastructures before team driven manufactured products.
                            Monotonecally exploit tactical market vis-a-vis excellent deliverables.
                        </p>
                    </div>
                </div>
                <p className="text-center py-5">Copyright @ 2019. Insurance LLC</p>
            </div>
        </div>
        
    )
}

export default Section8;