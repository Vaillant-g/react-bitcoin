import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function DatePickers(props) {
    const onChangeStart = (e) => {
        props.changeDateStart(e.target.value);
    }

    const onChangeEnd = (e) => {
        props.changeDateEnd(e.target.value);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Start Date</InputGroup.Text>
                </InputGroup.Prepend>
                <input value onChange={onChangeStart} type='date' className="form-control" value={props.startDate}></input>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">End Date</InputGroup.Text>
                </InputGroup.Prepend>
                <input value onChange={onChangeEnd} type='date' className="form-control" value={props.endDate}></input>
            </InputGroup>
        </>
    )
}