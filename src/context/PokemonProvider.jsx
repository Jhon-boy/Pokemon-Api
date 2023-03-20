import { useState, useEffect } from "react";
import { useForm } from "../hook/useForm";
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({ children }) => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [globalP, setGlobalP] = useState([]);
    const [offset, setOffset] = useState(0);
    const [carga, setCarga] = useState(true);
    const [active, setActive] = useState(false);

    //Llamado de busqueda
    const { valueSearch, onResetForm, imputChange } = useForm({
        valueSearch: '',
    })

    //Lamar 50 pOKEMONS A LA API
    const getAllPokemon = async (limit = 50) => {
        const urlP = 'https://pokeapi.co/api/v2/';
        const res = await fetch(`${urlP}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        //Esatdps de la aplicacion 


        const promise = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        //Almacenamos el llamadamo

        const result = await Promise.all(promise);

        //Guardamos el resultado que nos devuelve todo

        setAllPokemon([...allPokemon, ...result]);

        setCarga(false);


    }

    const getGlobalPokemon = async () => {
        const urlP = 'https://pokeapi.co/api/v2/';
        const res = await fetch(`${urlP}pokemon?limit=100&offset=0`);
        const data = await res.json();

        const promise = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        //Almacenamos el llamadamo

        const result = await Promise.all(promise);

        //Guardamos el resultado que nos devuelve todo

        setGlobalP(result);

        setCarga(false);
    }

    //Funcion para obtener un Pokemon por ID

    const getPokemonByID = async id => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    };

    //Carga todos los datos de la API
    useEffect(() => {
        getAllPokemon()
    }, [offset]);

    useEffect(() => {
        getGlobalPokemon()
    }, []);


    //Btn CARGAR MAS
    const onClickLoadMore = () => {
        setOffset(offset + 50);

    }
    //Funcion de filtrado
    const [filterPokemon, setFilterPokemon] = useState([]);
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    })

    const hanndlCheckBox = e => {
        setTypeSelected({
            ...typeSelected, [e.target.name]: e.target.checked
        });
        if (e.target.checked) {
            const resultadoFilter = globalP.filter(pokemon =>
                pokemon.types.map(
                    type =>
                        type.type.name
                ).includes(e.target.name));
         setFilterPokemon([...filterPokemon, ...resultadoFilter])
        } else{
            const resultadoFilter = filterPokemon.filter(pokemon =>
               !pokemon.types.map(
                    type =>
                        type.type.name
                ).includes(e.target.name));
         setFilterPokemon([ ...resultadoFilter])
        }
    }

    return (
        //Aqui pasamos los valores a todas las aplicaciones 
        <PokemonContext.Provider
            value={{
                valueSearch,
                imputChange,
                //Carga de los datos
                carga,
                setCarga,
                onResetForm,
                allPokemon,
                getPokemonByID,
                globalP,
                //Filtrados
                active,
                setActive,
                onClickLoadMore,
                hanndlCheckBox,
                filterPokemon 

            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}
