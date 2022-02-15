import React from 'react';
import Todo_Pops from './Todo_Pops';

const Todo_List = (): JSX.Element => {
    const todo_List = [
        {
            key: 1,
            description: 'Buy new sweet Shirt',
            isCheck: true,
        },
        {
            key: 2,
            description: 'Begin Promotional Phase',
            isCheck: true,
        },
        {
            key: 3,
            description: 'Read and article',
            isCheck: false,
        },
        {
            key: 4,
            description: 'Try not to fall a sleep',
            isCheck: false,
        },
        {
            key: 5,
            description: "Watch 'Sherlock'",
            isCheck: false,
        },
        {
            key: 6,
            description: 'Begin QA for the product',
            isCheck: false,
        },
        {
            key: 7,
            description: 'Go to a walk',
            isCheck: false,
        },
    ];

    return (
        <>
            {todo_List.map<JSX.Element>(
                (value): JSX.Element => (
                    <Todo_Pops
                        key={value.key}
                        description={value.description}
                        check={value.isCheck}
                    />
                ),
            )}
        </>
    );
};

export default Todo_List;
