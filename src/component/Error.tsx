import React from 'react';

const Error = (): JSX.Element => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h2 className="text-danger"> 404 Error Page </h2>
                <h5> Sorry, This Page does not exist </h5>
            </div>
        </>
    );
};

export default Error;
