import React from 'react';

export default function DatePickers(props) {
    const onChangeStart = (e) => {
        props.changeDateStart(e.target.value);
    }

    const onChangeEnd = (e) => {
        props.changeDateEnd(e.target.value);
    }

    return (
        <>
            <label>Start Date</label>
            <input value onChange={onChangeStart} type='date'></input>
            <label>End Date</label>
            <input value onChange={onChangeEnd} type='date'></input>
        </>
    )
}