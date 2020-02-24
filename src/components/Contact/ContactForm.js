import React from 'react'

export default function ContactForm() {
    return (
        <div className="container-fluid contact-form ">
            <div className="container mx-auto text-center my-5 bg-white shadow-lg py-5">
                <h2 className="underline mb-5 capitalize">Send all your queries to us:</h2>
            
            <form className="w-75 mx-auto">
            <div className="form-group row container">
              <label className="col-sm-3 col-form-label">Your Name:</label> 
              <div className="col-sm-9">
                  <input className="form-control" type="text"></input>
                </div> 
            </div>
            <div className="form-group row container">
              <label className="col-sm-3 col-form-label">Your Email:</label> 
              <div className="col-sm-9">
                  <input className="form-control" type="email"></input>
                </div> 
            </div>
            <div className="form-group row container">
              <label className="col-sm-3 col-form-label">Your Phone no:</label> 
              <div className="col-sm-9">
                  <input className="form-control" type="number"></input>
                </div> 
            </div>
            <div className="form-group row container">
              <label className="col-sm-3 col-form-label">Your Message</label> 
              <div className="col-sm-9">
                  <textarea className="form-control"></textarea>
                </div> 
            </div>
            <div className="row text-center"><button className="btn btn-primary mx-auto">Submit response</button>
            </div>
            </form>
            </div>
        </div>

    )
}
