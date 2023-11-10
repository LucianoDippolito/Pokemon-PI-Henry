import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterCreated, orderByNameOrStrengh, getTypes, removeDetail, filterPokemonsByType, reloadPokemons } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import Navbar from '../Navbar/Navbar';
import style from './Home.module.css';
import random from '../../images/random.png'

// 1: Importaciones:

// Se importan las funciones y componentes necesarios del paquete react-redux y otros archivos del proyecto.

// 2: State y Hooks:

// Se utiliza el estado local (useState) para controlar varias variables como pokLoaded, orden, currentPage, y otras relacionadas con la paginación.
// Se utilizan los hooks useEffect para realizar acciones como cargar tipos de Pokémon, cargar Pokémon si no están cargados, y resetear la página actual cuando se actualiza la lista de Pokémon.

// 3: Funciones de Manipulación de Datos:

// Existen funciones como handleClick, handleFilterCreated, handleFilterByType, y handleSort que dispatchan acciones para filtrar y ordenar los Pokémon en función de las selecciones del usuario.

// 4: Renderizado Condicional:

// Dependiendo del estado del componente y los datos disponibles, se muestra una lista de Pokémon paginada, un mensaje de "Cargando..." o un mensaje de "No se encontraron Pokémon".

export default function Home() {

    const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)
    const types = useSelector(state => state.types)

    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(removeDetail());
        dispatch(getTypes());
        dispatch(getPokemons());

    }, [])

    useEffect(() => {
        setCurrentPage(1);
    }, [setCurrentPage]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(reloadPokemons());
    }

    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }

    function handleFilterByType(e) {
        dispatch(filterPokemonsByType(e.target.value));
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByNameOrStrengh(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className={style.home}>
            <Navbar />

            <button onClick={e => { handleClick(e) }} className={style.poke}> Reload all</button>

            <div className={style.sortfilter}>
                <select onChange={e => handleSort(e)}>
                    <option value="normal">Normal</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                    <option value="HAttack">Highest Attack</option>
                    <option value="LAttack">Lowest Attack</option>
                </select>
                <select onChange={e => handleFilterCreated(e)}>
                    <option value="All">All</option>
                    <option value="Api">API</option>
                    <option value="Created">Created</option>
                </select>
                <select onChange={e => handleFilterByType(e)}>
                    <option value="All">All types</option>
                    {
                        types.map(type => (
                            <option value={type.name} key={type.name}>{type.name}</option>
                        ))
                    }
                </select>
            </div>
            <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}
                page={currentPage}
            />
            <div className={style.cards}>
                {
                    currentPokemons.length ?
                    typeof currentPokemons[0] === 'object' ?
                    currentPokemons.map(el => {
                        return (
                                <div>
                                    <Link to={"/home/" + el.id} style={{ textDecoration: 'none' }} key={el.id}>
                                        <Card name={el.name} types={el.types} image={el.img ? el.img : random} id={el.id} weight={el.weight} height={el.height} key={el.id} />
                                    </Link>
                                </div>
                            )
                            }) :
                            <div className={style.notfound}>
                                <img src='images/notfound.png' alt="Pokemon not found" width='200px' />
                                <span>{currentPokemons[0]} not found</span>
                            </div>
                        :
                        <div className={style.loading}>
                            <img src='images/loading.gif' alt="Loading.." width='250px' />
                            <p className={style.loadingtext}>Loading...</p>
                        </div>
                }
            </div>
            <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}
                page={currentPage}
            />
            <br />
        </div>
    )
}