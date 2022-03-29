import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './OrderPlaced.css';
import axios from 'axios';

const OrderPlaced = () => {
    const {_id} = useParams();
    const [data, setData] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        data.status= 'pending';
        data.title= ExactIteam[0]?.title;

        axios.post('https://agile-tor-52722.herokuapp.com/orders', data)
        .then(res => {
        if (res.data.insertedId) {
            alert('Order Placed SuccessFully');
            reset();
        }
    })

    }

    useEffect(()=>{
        fetch(`/courses.json`)
        .then(res => res.json())
        .then(data => setData(data))
        
        
    },[])
    

    const ExactIteam = data.filter(td => td._id === _id);
   
    
    return (
        <div>
            <div className="containerdd">
                        <img src="http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg" alt="" style={{width:"100%" }} />
                        <div className="bg-overlay"></div>
                        <div className="centeredd text-black text-white fw-bolder fs-2">Thank You for Choosing this Course</div>
            </div>
                   
            <div>
                <Container>
                    
                <div>

                       
                    <div className="row">
                        
                        <div className="col-xs-12 col-sm-12 col-md-8 mx-auto my-5">

                            <div className="bg-white rounded-bg">
                            <form onSubmit={handleSubmit(onSubmit)}>
                           
                            
                           <div className="input-style py-3">
                                <input {...register("name", { required: true })} placeholder="Your Name"/>
                                {/* errors will return when field validation fails  */}
                                <input {...register("email", { required: true })} placeholder="Your Email"/>
                                
                                {/* errors will return when field validation fails  */}
                                <input {...register("address", { required: true })} placeholder="Your Address"/>

                                <input type="cardnumber" {...register("cardnumber", { required: true })} placeholder="Cardnumber"/>
                                

                                {/* errors will return when field validation fails  */}
                                <textarea {...register("description", { required: true })} placeholder="Description"/>
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
      
                                <input className="submit-btn" type="submit" value="Buy"/>
                           </div>
                                                        
                        </form>
                            </div>

                        </div>
                        </div>
                    </div>
                                          
            
                    
                </Container>
            </div>
        </div>
    );
};

export default OrderPlaced;



