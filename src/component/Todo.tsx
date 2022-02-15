import React from 'react';
import Todo_Date from './Todo_Date';
import Todo_List from './Todo_List';

const Todo = () => {
    return (
        <>
            <div className="container pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card fw-bold text-center box-style">
                            <div className="m-5">
                                <div className="mt-3 ">
                                    <Todo_Date />
                                    <div className="col ">
                                        <Todo_List />
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
