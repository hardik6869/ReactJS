import React from 'react';
import {DefaultRootState, useSelector} from 'react-redux';

const Home = () => {
    const records = useSelector(
        (state: DefaultRootState) => state.practical.practical[0],
    );
    const ReactPractical = records.map((value: string) => {
        <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a href={value.demo} className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>;
    });
    return (
        <>
            <div> {ReactPractical}</div>
            <h1>hrllo</h1>
        </>
    );
};

export default Home;
