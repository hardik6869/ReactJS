import React from 'react';
import './signup.css';
import Signup_Image from './Sign_Logo.png';

const SignUp = () => {
    return (
        <>
            <div className="container">
                <div className="bg-grey font-weight-bold mt-5 p-3">
                    <div className="row">
                        <div className="form-group col-md-5">
                            <p className="font-weight-bold h2 py-4">Sign Up</p>
                            <div className="text-center">
                                <label className="cursor-pointer" role="button">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        hidden
                                    />
                                    Photo +
                                </label>
                            </div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                            />
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                            />
                            <label>PhoneNo</label>
                            <input
                                type="text"
                                name="number"
                                className="form-control"
                            />
                            <label>Password</label>
                            <input
                                type="text"
                                name="password"
                                className="form-control"
                            />
                            <label>Confirm Password</label>
                            <input
                                type="text"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <div className="">
                            <img
                                className=""
                                src={Signup_Image}
                                style={{width: 'uto', height: '100%'}}
                            />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary">Submit</button>
                        <button className="btn btn-danger">Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
