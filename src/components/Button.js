import React from 'react';

function Button(props) {

    return (
        <button onClick={props.event} className="btn btn-primary">{props.name}</button>
    )
}

export default Button;