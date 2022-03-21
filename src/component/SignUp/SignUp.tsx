import React, {useState} from 'react';
import './signup.css';
import Signup_Image from './Sign_Logo.png';

const SignUp = () => {
    return (
        <>
            <div className="container">
                <div className="bg-grey font-weight-bold mt-2 p-3">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-5">
                                <p className="font-weight-bold h2 py-4">
                                    Sign Up
                                </p>
                                <div className="text-center">
                                    <label
                                        className="cursor-pointer"
                                        role="button">
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="jpg, .jpeg, .png"
                                        />
                                        Photo +
                                    </label>
                                </div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                />
                                <label>Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                />
                                <label>PhoneNo</label>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    className="form-control"
                                />
                                <label>Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                />
                                <label>Confirm Password</label>
                                <input
                                    type="text"
                                    name="confirm_password"
                                    id="confirm_password"
                                    className="form-control"
                                />
                            </div>
                            <div>
                                <img
                                    src={Signup_Image}
                                    style={{width: 'uto', height: '100%'}}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                            <button className="btn btn-danger" type="reset">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
