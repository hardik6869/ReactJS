import React from 'react';
import Todo_Date from './Todo_Date';
import Todo_List from './Todo_List';

const Todo = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="box_style col-md-5 position-relative">
                        <div className=" p-5 fw-bold text-center ">
                            <div className="mt-3 ">
                                <Todo_Date />
                                <div className="col ">
                                    <Todo_List />
                                </div>
                            </div>
                        </div>
                        <button className="position-absolute text-muted btn_Add">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Todo;
