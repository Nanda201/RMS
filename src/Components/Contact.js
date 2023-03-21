import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Contact() {
    const [contactapi, setConatctapi]=useState([])
  

    useEffect(()=>{
        axios.get("http://192.168.2.169:8000/contact/")
        .then(res=>{
            console.log(res.data);
            setConatctapi(res.data)
        })
    },[])

 
  return (
    <div>
        
      <div className="card text-center mt-5 pt-5">
        
        <div className="card-body">
        <div><h3>Contact Us</h3></div>
        <div className="mb-3 row mt-5 ">
          <label className="col-sm-2 col-form-label">
            <h4>id</h4>
          </label>
          <div className="col-sm-5 ">
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row mt-5 ">
          <label className="col-sm-2 col-form-label">
            <h4>name</h4>
          </label>
          <div className="col-sm-5">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row mt-5 ">
          <label className="col-sm-2 col-form-label">
            <h4>Email</h4>
          </label>
          <div className="col-sm-5">
            <input type="email" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row mt-5 ">
          <label className="col-sm-2 col-form-label">
            <h4>phone</h4>
          </label>
          <div className="col-sm-5">
            <input type="phone" className="form-control" />
          </div>
        </div>
        <div className="mb-3 row mt-5">
          <label className="col-sm-2 col-form-label">
            <h4>comments</h4>
          </label>
          <div className="col-sm-5">
            <textarea type="text" className="form-control" />
          </div>
        </div>
        <button className="btn btn-primary" >Submit</button>
      </div>
      </div>

      
    </div>
  );
}

export default Contact;
