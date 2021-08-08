import React, { useState} from 'react'
import PropTypes from 'prop-types';

export default function CounterApp({ value }) {

    // useState
    const [ counter, setCounter ] = useState( 0 );
    

    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 );
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd } >+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}