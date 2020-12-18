import React from 'react';
import { InputGroup, Row, Col, Container } from 'react-bootstrap';

export default function DatePickers(props) {
    const onChangeStart = (e) => {
        props.changeDateStart(e.target.value);
    }

    const onChangeEnd = (e) => {
        props.changeDateEnd(e.target.value);
    }

    return (
        <>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Start Date</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input value onChange={onChangeStart} type='date' className="form-control" value={props.startDate}></input>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">End Date</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input value onChange={onChangeEnd} type='date' className="form-control" value={props.endDate}></input>
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}