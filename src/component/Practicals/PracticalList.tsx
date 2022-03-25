import React from 'react';
import {Button, Card, Col} from 'react-bootstrap';
import {RootStateOrAny, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {practicalAction} from '../interface/Interface';

const PracticalList = () => {
    const records = useSelector<practicalAction>(
        (state: RootStateOrAny) => state.practical.practical[0],
    );
    const ReactPractical: practicalAction = records.map(
        (value: practicalAction, index: number) => {
            const action = index % 2 === 0;

            return (
                <Card
                    key={index}
                    className={action ? 'bg-gray my-3 shadow' : ' my-3 shadow'}>
                    <div className="my-3 p-3 rounded">
                        <Link to={`${value.id}`}>
                            <Card.Img
                                src={value.image}
                                className="shadow radioue border w-55"
                                variant="top"
                            />
                        </Link>
                        <Card.Body>
                            <Link to={`${value.id}`}>
                                <Card.Title as="div">
                                    <strong>
                                        <h3> {value.title} </h3>
                                    </strong>
                                </Card.Title>
                            </Link>
                            <Card.Text as="div">
                                <div className="my-3">{value.decription}</div>
                            </Card.Text>
                            <a
                                href={value.demo}
                                className="btn btn-primary mr-3">
                                Demo Link
                            </a>
                            <a href={value.github} className="btn btn-primary">
                                Github Link
                            </a>
                        </Card.Body>
                    </div>
                </Card>
            );
        },
    );
    return (
        <>
            <div className="container float-right bg-gray">
                <div className="text-center col-md-7">{ReactPractical}</div>
            </div>
        </>
    );
};

export default PracticalList;
