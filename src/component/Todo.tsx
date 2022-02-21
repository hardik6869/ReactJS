import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo_Date from './Todo_Date';

const Todo = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="container pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card fw-bold text-center box-style">
                            <div className="m-5">
                                <div className="mt-3">
                                    <Todo_Date />
                                    <div className="col">
                                        {!show ? <TodoForm /> : null}
                                    </div>
                                    <div className="position-relative mr-5 d-flex justify-content-center">
                                        <button
                                            className={`position-absolute ml-5 text-muted btn_Add translate-middle`}
                                            onClick={() => setShow(false)}
                                            style={{
                                                display: show
                                                    ? 'block'
                                                    : 'none',
                                            }}>
                                            +
                                        </button>
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
