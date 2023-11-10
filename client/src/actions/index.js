import axios from 'axios'

export function getPokemons() { 
    return async function (dispatch) {
        try {
            const {data} = await axios("http://localhost:3001/pokemons")

            return dispatch({ 
                type: "GET_POKEMONS",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTypes() { 
    return async function (dispatch) {
        try {
            const info = await axios("http://localhost:3001/types")
    
            return dispatch({ 
                type: "GET_TYPES",
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function reloadPokemons() { 
    return {
        type: "RELOAD_POKEMONS",
    }
}


export function postPokemon(payload) { 
    return async function (dispatch) { 
        const pokemon = await axios.post("http://localhost:3001/pokemons", payload)

        return {
            type: "POST_POKEMON",
            payload: pokemon
        }
    }
}

export function getPokemonName(name) { 
    return async function (dispatch) {
        try {

            return dispatch({ 
                type: "GET_POKEMON_NAME",
                payload: name
            })
        } catch (error) { 
            console.log(error)
            return dispatch({
                type: "GET_POKEMON_NAME",
                payload: ['Pokemon']
            })
        }
    }
}

export function getDetail(id) { 
    return async function (dispatch) {
        try {
            let json = await axios.get("http://localhost:3001/pokemons/" + id);

            return dispatch({ 
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function removeDetail() { 
    return {
        type: "REMOVE_DETAILS",
    }
}

export function filterPokemonsByType(payload) { 
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}

export function filterCreated(payload) { 

    return {
        type: "FILTER_CREATED",
        payload: payload
    }
}

export function orderByNameOrStrengh(payload) { 

    return {
        type: "ORDER_BY_NAME_OR_STRENGH",
        payload
    }
}