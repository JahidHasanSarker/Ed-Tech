
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {course, price, img, _id} = props.service;
    return (
        
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="image-box">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="text-container">
                                            <span className="d-flex text-muted justify-content-start mb-3">Sale</span>
                                       <div className="d-flex justify-content-between align-items-center">
                                            <h6 style={{color: '#2D3954', fontSize: '18px', }} className="fw-bold m-0">{course}</h6>
                                            
                                       </div>
                            
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-around">
                                    <p style={{fontSize: '22px', fontWeight: '700', color: '#fa3c4c'}} className="m-0">${price} </p>
                                        <Link to={`/orderPlaced/${_id}`}>
                                            <Button className="mb-3" variant="outline-danger">Enroll Now</Button>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
       
    );
};

export default Service;