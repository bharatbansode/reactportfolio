import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    });

    const inputEvent = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;
        
        setData((preVal) => {
            return {
                ...preVal,[name]:value,
            }
        })
    }

    const formSubmit = (e) =>
    {
        e.preventDefault();
        alert(`${data.fullname}`);
    }

    return (
        <>
           <div className="my-5">
                <h1 className="text-center">
                    Contact Us    
                </h1>   
            </div> 
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} required placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} required placeholder="Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} required placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inputEvent} required rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;