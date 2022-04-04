import React, {useState} from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');


    const handleInputChange = (e) =>{
        setinputValue (e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (inputValue.trim().length >3) {
            
            setCategories( categories =>  {
                return [ inputValue ,...categories ];
            });

            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
            <button
               className="btn btn-primary mb-3" >
                Agregar Categoria
            </button>
        </form>
  )
}



AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

