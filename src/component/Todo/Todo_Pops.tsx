import React, {useState} from 'react';
import {TodoInf} from '../interface/Infs';

const Todo_Pops: React.FC<{
    item: TodoInf;
    handleDelete: (id: string) => void;
}> = ({item, handleDelete}): JSX.Element => {
    const [listItem, setListItem] = useState<boolean>(false);
    const Status = (): void => {
        setListItem(!listItem);
    };
    return (
        <>
            <div className={`d-flex justify-content-between pt-4 item_event`}>
                <p className={listItem ? 'item_style' : ''}>{item.text}</p>
                <i
                    className={`fa fa-light fa-dot-circle font_style pt-1 ${
                        listItem ? 'change_style' : 'text-dark'
                    }`}
                    onDoubleClick={() => handleDelete(item._id)}
                    onClick={Status}></i>
            </div>
        </>
    );
};

export default Todo_Pops;
