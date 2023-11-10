import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonName } from '../../actions';
import style from './SearchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [ name, setName ] = useState("")

    function handleInputChange(e){ // atento a cambios de entrada
        e.preventDefault();
        setName(e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "))
    }

    function handleSubmit(e){ // atento al envio del form y despacha accion
        e.preventDefault();
        if(name !== ''){
            dispatch(getPokemonName(name))
            setName("")
        }
    }

    return(
        <div className={style.searchBox}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    className={style.searchTxt}
                    type="text" 
                    placeholder="Search Pokemon..."
                    value = {name}
                    onChange={(e) => handleInputChange(e)}
                />
            </form>
        </div>
    )
}
