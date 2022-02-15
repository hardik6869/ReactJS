import React from 'react';

const Todo_Date = (): JSX.Element => {
    const d: Date = new Date();
    const date: number = d.getDate();
    const year: number = d.getFullYear();
    const month: string = d.toLocaleDateString('default', {month: 'short'});
    const week: string = d.toLocaleDateString('default', {weekday: 'long'});

    return (
        <>
            <div className="d-flex justify-content-between mb-5">
                <div className="row ml-2 big">
                    <h1 className="font-weight-bold big">{date}</h1>
                    <span className="justify-content-inline">
                        <p className="big mt-1 text-muted">
                            {month}
                            <br />
                            {year}
                        </p>
                    </span>
                </div>
                <p className="font-weight-bold mt-1 text-muted">{week}</p>
            </div>
        </>
    );
};

export default Todo_Date;
