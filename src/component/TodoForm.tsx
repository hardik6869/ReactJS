import React, {useState} from 'react';
import Todo_Pops from './Todo_Pops';

const TodoForm = (): JSX.Element => {
    const [input, setInput] = useState('');
    const [itemList, setItemList] = useState([]);
    const [show, setShow] = useState(true);

    const onChangeItem = (e: {
        target: {value: React.SetStateAction<string>};
    }) => {
        setInput(e.target.value);
    };

    const addTimeList = (): void => {
        if (input === '') {
            alert('Please Enter Something');
        } else {
            setItemList((oldItems) => {
                return [...oldItems, input];
            });
            setInput('');
        }
    };

    const keyEvent = (e: {key: string}) => {
        if (e.key === 'Enter') {
            addTimeList();
        } else if (e.key == 'Escape') {
            setShow(true);
        }
    };
    return (
        <>
            <div className="col">
                {!show ? (
                    <div className="row justify-content-center">
                        <input
                            type="text"
                            className="input_style m-1"
                            value={input}
                            onChange={onChangeItem}
                            onKeyDown={keyEvent}
                            autoFocus
                        />

                        <button
                            className="show_btn btn btn-success rounded-circle p-2"
                            onClick={addTimeList}>
                            Add
                        </button>
                    </div>
                ) : null}
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

export default TodoForm;
