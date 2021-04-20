import React from 'react';

import "../../../../Assets/dist/benefit.scss";

export default function Benefit(props) {
    return (
        <div className="Benefit">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button onClick={props.clicked}>Selengkapnya</button>
        </div>
    )
}