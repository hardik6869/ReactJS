import React, {FC, FormEvent, useEffect, useRef} from 'react';
import './signup.css';
import Signup_Image from './Sign_Logo.png';
import {Field, Formik} from 'formik';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {updateVal} from '../../reducers/registerSlice';
import {SignUpSchema} from '../validation/ValidationSchema';
import {useNavigate} from 'react-router';
import {login, logout} from '../../reducers/logoutSlice';

const SignUp: FC = () => {
    const dispatch = useDispatch();
    const imageRef: React.MutableRefObject<undefined> = useRef();
    const navigate = useNavigate();

    return (
        <>
            <div className="container ">
                <div className="mt-5 ml-5 pl-3 bg-grey font-weight-bold mt-2 p-3">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            number: '',
                            password: '',
                            confirm_password: '',
                            image: null,
                        }}
                        validationSchema={SignUpSchema}
                        onSubmit={(values) => {
                            dispatch(
                                updateVal({
                                    name: values.name,
                                    email: values.email,
                                    number: values.number,
                                    password: values.password,
                                    confirm_password: values.confirm_password,
                                    image: URL.createObjectURL(values.image),
                                }),
                                navigate('/signin'),
                            );
                            dispatch(() => {
                                login(true);
                            });
                        }}>
                        {({handleSubmit, setFieldValue, errors, touched}) => {
                            return (
                                <Form onSubmit={handleSubmit}>
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
                                                        id="image"
                                                        name="image"
                                                        ref={imageRef}
                                                        accept="jpg, .jpeg, .png"
                                                        onChange={(
                                                            event: FormEvent,
                                                        ) => {
                                                            setFieldValue(
                                                                'image',
                                                                event
                                                                    .currentTarget
                                                                    .files[0],
                                                            );
                                                        }}
                                                        hidden
                                                    />
                                                    Photo +
                                                    {errors.image &&
                                                    touched.image ? (
                                                        <p className="error_message">
                                                            {errors.image}
                                                        </p>
                                                    ) : null}
                                                </label>
                                            </div>
                                            <label>Name</label>
                                            <Field
                                                type="text"
                                                name="name"
                                                className="form-control"
                                            />
                                            {errors.name && touched.name ? (
                                                <p className="error_message">
                                                    {errors.name}
                                                </p>
                                            ) : null}

                                            <label>Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                className="form-control"
                                            />
                                            {errors.email && touched.email ? (
                                                <p className="error_message">
                                                    {errors.email}
                                                </p>
                                            ) : null}

                                            <label>PhoneNo</label>
                                            <Field
                                                type="number"
                                                name="number"
                                                className="form-control"
                                            />
                                            {errors.number && touched.number ? (
                                                <p className="error_message">
                                                    {errors.number}
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

                                            <label>Confirm Password</label>
                                            <Field
                                                type="password"
                                                name="confirm_password"
                                                className="form-control"
                                            />
                                            {errors.confirm_password &&
                                            touched.confirm_password ? (
                                                <p className="error_message">
                                                    {errors.confirm_password}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div>
                                            <img
                                                src={Signup_Image}
                                                style={{
                                                    width: 'auto',
                                                    height: '100%',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <Button
                                            className="btn btn-primary"
                                            type="submit">
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
        </>
    );
};

export default SignUp;
