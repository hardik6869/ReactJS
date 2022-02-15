import React, {useState} from 'react';

const Todo_Pops = (props: {
    description: React.ReactFragment;
    check: boolean;
}): JSX.Element => {
    const [listItem, setListItem] = useState(props.check);
    const Status = (): void => {
        setListItem(!listItem);
    };
    return (
        <>
            <div
                className={`d-flex justify-content-between pt-3 mb-3 item_event`}>
                <p className={listItem ? 'item_style' : ''}>
                    {props.description}{' '}
                </p>
                <i
                    className={`fa fa-light fa-dot-circle font_style pt-1 ${
                        listItem ? 'change_style' : 'text-dark'
                    }`}
                    onClick={Status}></i>
            </div>
        </>
    );
};

export default Todo_Pops;
