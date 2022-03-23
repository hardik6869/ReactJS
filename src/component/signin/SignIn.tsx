import {Field, Formik} from 'formik';
import React, {useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {login, logout} from '../../reducers/logoutSlice';
import {signin} from '../../reducers/registerSlice';
import '../SignUp/signup.css';
import {SignInSchema} from '../validation/ValidationSchema';

const SignIn = () => {
    const data = JSON.parse(localStorage.getItem('login'));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(login(true));
    };
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center align-item-center bg-grey font-weight-bold mt-5 p-3">
                    <div className="col-md-5">
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={SignInSchema}
                            onSubmit={(values) => {
                                if (
                                    values.email === data.email &&
                                    values.password === data.password
                                ) {
                                    navigate('/home');
                                } else {
                                    alert(
                                        'Please Enter Valid Email and Password',
                                    );
                                }
                            }}>
                            {({handleSubmit, errors, touched}) => {
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <h4 className="text-center">
                                                Sign In
                                            </h4>
                                            <label>Email</label>
                                            <Field
                                                type="text"
                                                name="email"
                                                className="form-control"
                                            />
                                            {errors.email && touched.email ? (
                                                <p className="error_message">
                                                    {errors.email}
                                                </p>
                                            ) : null}

                                            <label>Password</label>
                                            <Field
                                                type="text"
                                                name="password"
                                                className="form-control"
                                            />
                                            {errors.password &&
                                            touched.password ? (
                                                <p className="error_message">
                                                    {errors.password}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Button
                                                className="btn btn-primary"
                                                type="submit"
                                                onClick={() => loginHandler()}>
                                                Submit
                                            </Button>
                                            <Button
                                                className="btn btn-danger"
                                                type="reset">
                                                Reset
                                            </Button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
