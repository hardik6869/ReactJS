import React, {useEffect, useState} from 'react';
import {TodoInf} from '../interface/Infs';
import TodoForm from './TodoForm';
import Todo_Pops from './Todo_Pops';

const TodoList = (): JSX.Element => {
    const [itemList, setItemList] = useState<TodoInf[]>([]);
    const [show, setShow] = useState<boolean>(true);

    // Fetch Todo Items using useEffect
    React.useEffect((): void => {
        fetchItemList();
    }, []);

    const fetchItemList = async (): Promise<void> => {
        try {
            const response: Response = await fetch(
                'https://todo-backend-ts.herokuapp.com/api/TodoApp',
            );
            const data = await response.json();
            setItemList(data.todo);
        } catch (error) {
            console.log('error', error);
        }
    };

    // Add Todo Item 
    const addTodoItem = async (todoItem: string): Promise<void> => {
        if (todoItem.trim().length > 0) {
            const res: Response = await fetch(
                'https://todo-backend-ts.herokuapp.com/api/TodoApp',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({text: todoItem}),
                },
            );
            const data = await res.json();

            setItemList([...itemList, data.todo]);
        } else {
            alert('Please Enter Something');
        }
    };

    // Delete Todo Item
    const deleteTodoItem = async (_id: string) => {
        console.log(_id);
        if (window.confirm('Are you sure you want to delete this Todo?')) {
            await fetch(
                `https://todo-backend-ts.herokuapp.com/api/TodoApp/${_id}`,
                {
                    method: 'DELETE',
                },
            );
            setItemList(itemList.filter((todo) => todo._id !== _id));
        }
    };

    // Escape & Enter Event

    const keyEvent = (e: {key: string}): void => {
        if (e.key == 'Enter') {
            addTodoItem;
        } else if (e.key == 'Escape') {
            setShow(true);
        }
    };

    return (
        <>
            <div className="col">
                {!show ? (
                    <TodoForm handleAdd={addTodoItem} keyEvent={keyEvent} />
                ) : null}

                <div className="list">
                    {itemList.map((item: TodoInf) => {
                        return (
                            <Todo_Pops
                                item={item}
                                key={item._id}
                                handleDelete={deleteTodoItem}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="position-relative mr-5 d-flex justify-content-center">
                <button
                    className={`position-absolute ml-5 text-muted btn_Add translate-middle`}
                    onClick={() => setShow(false)}
                    style={{
                        display: show ? 'block' : 'none',
                    }}>
                    +
                </button>
            </div>
        </>
    );
};

export default TodoList;
