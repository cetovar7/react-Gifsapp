import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategorias}) => {

    const [inputValue, setinputValue] = useState('')
    const handleSumit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setcategorias( c => [inputValue, ...c]);
            setinputValue('');
        }
        
    }

    return (
        <>
            <form onSubmit={handleSumit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setinputValue(e.target.value)}
                    placeholder="Escribe algo"
                ></input>
            </form>
        </>
    )
}


AddCategory.propTypes ={
    setcategorias: PropTypes.func.isRequired
}