import React, {useState} from 'react';

const Services = (): JSX.Element => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="container mt-5">
                <h2>Services</h2>
                <div className="counter">
                    <button
                        className="btn btn-danger pr-3 pl-3 mr-2"
                        onClick={() => {
                            setCount(count - 1);
                        }}>
                        🥺 - 🥺
                    </button>
                    {count}
                    <button
                        className="btn btn-success pr-3 pl-3 ml-2"
                        onClick={() => {
                            setCount(count + 1);
                        }}>
                        😀 + 😀
                    </button>
                </div>
            </div>
        </>
    );
};

export default Services;
