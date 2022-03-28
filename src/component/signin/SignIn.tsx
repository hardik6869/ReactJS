import {Field, Formik} from 'formik';
import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {NavigateFunction, useNavigate} from 'react-router';
import {login} from '../../reducers/logoutSlice';
import {userAction} from '../interface/Interface';
import '../SignUp/signup.css';
import {SignInSchema} from '../validation/ValidationSchema';

const SignIn = (): JSX.Element => {
    const data: userAction = JSON.parse(localStorage.getItem('login') || '{}');
    const {action} = useSelector((state: RootStateOrAny) => state.login);
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = (): void => {
        dispatch(login(true));
    };
    return (
        <>
            {!action && (
                <div className="container">
                    <div className="d-flex justify-content-center align-item-center bg-grey font-weight-bold mt-5 p-3">
                        <div className="card p-5 col-md-5 shadow-lg radious-5 border-5">
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
                                                <h4 className="text-center font-weight-bold mb-4">
                                                    Sign In
                                                </h4>
                                                <label>Email</label>
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    className="form-control mb-4"
                                                />
                                                {errors.email &&
                                                touched.email ? (
                                                    <p className="error_message">
                                                        {errors.email}
                                                    </p>
                                                ) : null}

                                                <label>Password</label>
                                                <Field
                                                    type="password"
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
                                            <div className="text-center pt-3">
                                                <Button
                                                    className="btn btn-primary"
                                                    type="submit"
                                                    onClick={() =>
                                                        loginHandler()
                                                    }>
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
                            <a
                                className="mt-4 text-center"
                                style={{cursor: 'pointer'}}
                                onClick={() => navigate('/signUp')}>
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignIn;
