import React from 'react';

const Todo = () => {
    return (
        <>
            <div className="main">
                <div className="container pb-5 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="card fw-bold text-center box_style">
                                <div className="m-5">
                                    <p className="d-flex justify-content-between mb-5">
                                        <div className="row ml-2 big">
                                            <h1 className="font-weight-bold big">
                                                12
                                            </h1>
                                            <span className="justify-content-inline">
                                                <p className="big mt-1">
                                                    JAN
                                                    <br />
                                                    2016
                                                </p>
                                            </span>
                                        </div>
                                        <p className="font-weight-bold mt-1">
                                            TUESDAY
                                        </p>
                                    </p>
                                    {/* <input
                                    type="text"
                                    className="form-control text-center input_style mb-5"
                                /> */}
                                    <div className="col">
                                        <div className="d-flex justify-content-between pt-3">
                                            <p className="text-muted">
                                                Buy new sweet Shirt
                                            </p>
                                            <i className="fa fa-solid fa-circle text-success"></i>
                                        </div>

                                        <div className="d-flex justify-content-between pt-4">
                                            <p className="text-muted">
                                                Begin Promotional Phase{' '}
                                            </p>
                                            <i className="fa fa-solid fa-circle text-success"></i>
                                        </div>

                                        <div className="d-flex justify-content-between pt-4">
                                            <p> Read and article </p>
                                            <i className="fa fa-solid fa-circle"></i>
                                        </div>

                                        <div className="d-flex justify-content-between pt-4">
                                            <p> Try not to fall a sleep </p>
                                            <i className="fa fa-solid fa-circle"></i>
                                        </div>

                                        <div className="d-flex justify-content-between pt-4">
                                            <p> Watch 'Sherlock' </p>
                                            <i className="fa fa-solid fa-circle"></i>
                                        </div>

                                        <div className="d-flex justify-content-between pt-4">
                                            <p> Begin QA for the product </p>
                                            <i className="fa fa-solid fa-circle"></i>
                                        </div>

                                        <div className="d-flex justify-content-between pt-4 mb-5">
                                            <p> Go to a walk </p>
                                            <i className="fa fa-solid fa-circle"></i>
                                        </div>
                                        <div className="position-relative mr-5">
                                            <button className="position-absolute text-muted btn_Add translate-middle">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Todo;
