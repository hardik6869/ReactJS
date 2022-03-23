import React from 'react';
import {Button, Card, Col} from 'react-bootstrap';
import {DefaultRootState, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const PracticalList = () => {
    const records = useSelector(
        (state: DefaultRootState) => state.practical.practical[0],
    );

    const ReactPractical = records.map((value: any, index: number) => {
        const action = value.id % 2;
        return (
            <Col
                key={index}
                className={
                    action == 0
                        ? 'd-flex align-items-center '
                        : 'd-flex align-items-right'
                }
                sm={12}
                md={6}
                lg={4}
                xl={6}>
                <Card className="my-3 p-3 rounded">
                    <Link to={`${value.id}`}>
                        <Card.Img src={value.image} variant="top" />
                    </Link>
                    <Card.Body>
                        <Link to={`${value.id}`}>
                            <Card.Title as="div">
                                <strong>{value.title}</strong>
                            </Card.Title>
                        </Link>
                        <Card.Text as="div">
                            <div className="my-3">{value.decription}</div>
                        </Card.Text>
                        <Button variant="primary">
                            <a href={value.demo}></a>Demo Link
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    });
    return (
        <>
            <div className="container">{ReactPractical}</div>
        </>
    );
};

export default PracticalList;
