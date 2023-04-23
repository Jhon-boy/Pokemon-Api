import React from 'react'
import pokemonApi from '../img/pokemonApi.png'
import Firebaselogo from '../img/Firebaselogo.png'
import netlify from '../img/netlify.png'
import react from '../img/react.png'
import { useNavigate } from 'react-router-dom'

export const InfoPage = () => {
    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    }

    return (
        <div className='Main container'>

            <div className='MainD'>
                <div className='acercaDe'>
                    <h1>Bienvenidos </h1>
                    <div>
                        <div className='textP'>
                            <p>Me complace compartir con ustedes esta página fue realizada
                                con fines de aprendizaje siendo mi primera experiencia en Desarrolo Web.
                                A través de este proyecto, he aprendido mucho sobre el desarrollo
                                web y cómo integrar diferentes tecnologías para crear una
                                experiencia de usuario agradable. Espero que encuentren útil
                                esta página y que les brinde información valiosa sobre los Pokemons</p>
                        </div>
                        <div className='textP'>
                            <ul>
                                <li><a className='netlify' href='https://es.reactjs.org'>Netlify</a></li>
                            </ul>
                            <ul>
                                <li><a className='pokemm' href='https://pokeapi.co'>Pokemon - Api</a></li>
                            </ul>
                            <ul>
                                <li><a className='firebase' href='www.react.js'>Firebase</a></li>
                            </ul>
                            <ul>
                                <li><a className='reactjs' href='www.react.js'>React</a></li>
                            </ul>
                            <p>Utilicé React y Firebase para el desarrollo
                                y alojamiento de la página, Netlify para la implementación continua
                                y la PokemonApi para obtener los datos de los Pokemons.</p>
                        </div>

                    </div>
                    <button onClick={() => navigateTo('/')} className='btnInicio'>Regresar a inicio</button>
                </div>
                <div className='herramientas'>
                    <h1>Tecnologías</h1>


                    <div className='prw'>
                        <div className='cardsLogos'>
                            <img src={netlify} className="App-logo " alt="logo" />
                        </div>

                        <div className='cardsLogos'>

                            <img src={pokemonApi} className="App-logo " id='pokeImg' alt="logo" />
                        </div>
                    </div>


                    <div className='prw'>

                        <div className='cardsLogos'>
                            <img src={Firebaselogo} alt="logo" />
                        </div>


                        <div className='cardsLogos'>
                            <img src={react} className="App-logo" alt="logo" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
