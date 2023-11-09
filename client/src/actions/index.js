import axios from 'axios'

export function getPokemons() { // Hace una solicitud GET a http://localhost:3001/pokemons para obtener la lista de todos los Pokémon.
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/pokemons", {

        })

        return dispatch({ // Despacha una acción con el tipo GET_POKEMONS y los datos de los Pokémon como carga útil.
            type: "GET_POKEMONS",
            payload: json.data
        })
    }
}

export function getTypes() { // Hace una solicitud GET a http://localhost:3001/types para obtener la lista de tipos de Pokémon.
    return async function (dispatch) {
        var info = await axios.get("http://localhost:3001/types", {

        })

        return dispatch({ // Despacha una acción con el tipo GET_TYPES y los datos de los tipos como carga útil.
            type: "GET_TYPES",
            payload: info.data
        })
    }
}

export function reloadPokemons() { // Crea una acción con el tipo RELOAD_POKEMONS. Acción para recargar la lista de Pokémon, aunque el comportamiento específico no está claro.
    return {
        type: "RELOAD_POKEMONS",
    }
}


export function postPokemon(payload) { // Hace una solicitud POST a http://localhost:3001/pokemons con los datos del Pokémon proporcionados en el parámetro payload.
    return async function (dispatch) { // Despacha una acción con el tipo POST_POKEMON y los datos del nuevo Pokémon como carga útil.
        const pokemon = await axios.post("http://localhost:3001/pokemons", payload)

        return {
            type: "POST_POKEMON",
            payload: pokemon
        }
    }
}

export function getPokemonName(name) { // Hace una solicitud GET a http://localhost:3001/pokemons?name={name} para obtener los detalles del Pokémon.
    return async function (dispatch) {
        try {
            const json = await axios.get("http://localhost:3001/pokemons?name=" + name)

            return dispatch({ // Despacha una acción con el tipo GET_POKEMON_NAME y los datos del Pokémon buscado como carga útil. 
                type: "GET_POKEMON_NAME",
                payload: json.data
            })
        } catch (error) { // Si no se encuentra el Pokémon, devuelve un array con el nombre "Pokemon".
            console.log(error)
            return dispatch({
                type: "GET_POKEMON_NAME",
                payload: ['Pokemon']
            })
        }
    }
}

export function getDetail(id) { // Hace una solicitud GET a http://localhost:3001/pokemons/{id} para obtener los detalles del Pokémon.
    return async function (dispatch) {
        try {
            let json = await axios.get("http://localhost:3001/pokemons/" + id);

            return dispatch({ // Despacha una acción con el tipo GET_DETAILS y los datos del Pokémon detallado como carga útil.
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function removeDetail() { // Crea una acción con el tipo REMOVE_DETAILS. Parece una acción para eliminar los detalles del Pokémon, aunque el comportamiento específico no está claro.
    return {
        type: "REMOVE_DETAILS",
    }
}

export function filterPokemonsByType(payload) { // Crea una acción con el tipo FILTER_BY_TYPES y el tipo de Pokémon proporcionado en el parámetro payload.
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}

export function filterCreated(payload) { // Crea una acción con el tipo FILTER_CREATED y el filtro proporcionado en el parámetro payload.

    return {
        type: "FILTER_CREATED",
        payload
    }
}

export function orderByNameOrStrengh(payload) { // Crea una acción con el tipo ORDER_BY_NAME_OR_STRENGH y el criterio de orden proporcionado en el parámetro payload.

    return {
        type: "ORDER_BY_NAME_OR_STRENGH",
        payload
    }
}