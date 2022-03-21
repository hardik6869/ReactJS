import React from 'react';
import '../SignUp/signup.css';

const SignIn = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center align-item-center bg-grey font-weight-bold mt-5 p-3">
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <h4 className="text-center">Sign In</h4>
                                <label>Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                />

                                <label>Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                />
                                <div className="">
                                    <button
                                        className="btn btn-primary"
                                        type="submit">
                                        Submit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        type="reset">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
