import React from 'react';
import TodoList from './TodoList';
import Todo_Date from './Todo_Date';

const Todo = (): JSX.Element => {
    return (
        <>
            <div className="container pb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card fw-bold text-center box-style">
                            <div className="m-5">
                                <div className="mt-3">
                                    <Todo_Date />
                                    <TodoList />
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
