import React, {FC, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App: FC = () => {
    const [advice, setAdvice] = useState('');
    useEffect(() => {
        const url = '/api';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.name);
                setAdvice(json.name);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Hello World {advice} </h1>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
