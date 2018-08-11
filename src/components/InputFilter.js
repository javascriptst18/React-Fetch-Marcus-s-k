import React from 'react';

function InputFilter(props){

    return (
        <div>
            <label htmlFor="search">Search movie</label>
            <input 
                name="search"
                id="search"
                onKeyPress={props.handleKey}
            />
        </div>
    )
}

export default InputFilter;