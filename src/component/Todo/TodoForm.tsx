import React, {FC, useState} from 'react';

interface props {
    keyEvent: KeyEve;
    handleAdd: AddTodo;
}
type AddTodo = (text: string) => void;
type KeyEve = (e: {key: string}) => void;

const TodoForm: FC<props> = ({handleAdd, keyEvent}): JSX.Element => {
    const [text, setText] = useState<string>('');

    // onCHange input Event 
    const onChangeItem = (e: React.FormEvent<HTMLInputElement>): void => {
        setText(e.currentTarget.value);
    };

    // onSubmit Event (Button Click)
    const handleData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleAdd(text);
        setText('');
    };

    return (
        <>
            <form onSubmit={handleData}>
                <div className="row justify-content-center ">
                    <input
                        type="text"
                        className="input_style m-1"
                        value={text}
                        onChange={onChangeItem}
                        onKeyDown={keyEvent}
                        autoFocus
                        required
                    />
                    <button
                        className="show_btn btn btn-primary rounded-ractangle ml-3 p-2"
                        type="submit">
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
