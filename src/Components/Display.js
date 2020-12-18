import React from 'react';
import BitcoinLineChart from './BitcoinLineChart'

export default function Display(props) {
    const startDate = props.startDate;
    const endDate = props.endDate;

    return (
        <>
            <h2>Bitcoins evolutions bewteen {startDate} and {endDate}</h2>
            <BitcoinLineChart></BitcoinLineChart>
        </>
    )
}


