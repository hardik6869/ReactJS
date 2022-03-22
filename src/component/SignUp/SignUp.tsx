import React, {FC, FormEvent, useRef, useState} from 'react';
import './signup.css';
import Signup_Image from './Sign_Logo.png';
import {Formik} from 'formik';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {updateVal} from '../../reducers/registerSlice';

const SignUp: FC = () => {
    const dispatch = useDispatch();
    const imageRef: React.MutableRefObject<undefined> = useRef();
    return (
        <>
            <div className="container">
                <div className="bg-grey font-weight-bold mt-2 p-3">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            number: '',
                            password: '',
                            confirm_password: '',
                            image: null,
                        }}
                        onSubmit={(values) => {
                            dispatch(
                                updateVal({
                                    name: values.name,
                                    email: values.email,
                                    number: values.number,
                                    password: values.password,
                                    confirm_password: values.confirm_password,
                                    img: URL.createObjectURL(values.image),
                                }),
                            );
                        }}>
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                        }) => {
                            return (
                                <form onSubmit={handleSubmit}>
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
                                                    />
                                                    Photo +
                                                </label>
                                            </div>
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={(event: FormEvent) =>
                                                    handleChange(event)
                                                }
                                                onBlur={handleBlur}
                                                className="form-control"
                                            />
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={(event: FormEvent) =>
                                                    handleChange(event)
                                                }
                                                onBlur={handleBlur}
                                                className="form-control"
                                            />
                                            <label>PhoneNo</label>
                                            <input
                                                type="number"
                                                name="number"
                                                onChange={(event: FormEvent) =>
                                                    handleChange(event)
                                                }
                                                onBlur={handleBlur}
                                                className="form-control"
                                            />
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={(event: FormEvent) =>
                                                    handleChange(event)
                                                }
                                                onBlur={handleBlur}
                                                className="form-control"
                                            />
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirm_password"
                                                onChange={(event: FormEvent) =>
                                                    handleChange(event)
                                                }
                                                onBlur={handleBlur}
                                                className="form-control"
                                            />
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
                                </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default SignUp;
