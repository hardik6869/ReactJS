import React, {useState} from 'react';
import Todo_Pops from './Todo_Pops';

const TodoForm = () => {
    const [input, setInput] = useState('');
    const [itemList, setItemList] = useState([]);

    const onChangeItem = (e: {
        target: {value: React.SetStateAction<string>};
    }) => {
        setInput(e.target.value);
    };

    const addTimeList = () => {
        setItemList((oldItems) => {
            return [...oldItems, input];
        });
        setInput('');
    };
    return (
        <>
            <div className="row justify-content-center">
                <input
                    type="text"
                    className="input_style m-1"
                    value={input}
                    onChange={onChangeItem}
                />

                <button
                    className="show_btn btn btn-success rounded-circle p-2"
                    onClick={addTimeList}>
                    Add
                </button>
            </div>
            <div className="list">
                {itemList.map((val, index) => {
                    return (
                        <Todo_Pops
                            description={val}
                            check={false}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default TodoForm;
