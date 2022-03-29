import React from 'react';
import { Container } from 'react-bootstrap';
import consultancy from './consultancy.webp'
import './Consultancy.css'


const Team = () => {
    return (
        <div id='consultant'>
            <Container>
               
                <div>
                   
                   <div className='text-center sub-heading'>
                        <h5>Your Confusion Stack Solution</h5>
                        <h2>STACK CONSULTANCY - 100% FREE</h2>
                   </div>
                        
                    <div className='mt-5'>
                        <div className="row">

                            <div className='col-md-5 consult-img'>
                                    <img src={consultancy} alt=""/>
                            </div>
        
                            <div className='col-md-6 offset-1 d-flex align-items-center justify-content-center'>
                                <div className="consult-info">
                                    <h5>Let Us Know What is Your Problem</h5>
                                    <h2>Submit Problem</h2>
                                    <p>First, write down your problems. We have a form at the bottom of this page. Send us your problem from there. One thing to keep in mind while submitting the form is that no wrong information is given or there is no gap in the information. If there is a gap in information, we will not be able to understand your problem properly. All your information will be kept with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
               
            </Container>
            
        </div>
    );
};

export default Team;

 


/* <div>
                    <div className="row mx-auto">
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                            <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-1.jpg" alt="" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                        <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-2.jpg" alt="" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                        <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-3.jpg" alt="" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                        <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-4.jpg" alt="" />
                        </div>
                    </div>
                </div>  */