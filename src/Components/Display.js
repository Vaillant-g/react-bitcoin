import React from 'react';

export default function Display(props) {
    const startDate = props.startDate;
    const endDate = props.endDate;
    return (
        <>
            <h1>Bitcoins evolutions bewteen {startDate} and {endDate}</h1>
        </>
    )
}