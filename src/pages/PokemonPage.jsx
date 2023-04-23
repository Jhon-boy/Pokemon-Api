import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { Loader } from '../componentes/Loader'
import { primerMayuscula } from '../Opciones/ConfigsPage';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';

export const PokemonPage = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async (id) => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	}

	useEffect(() => {
		fetchPokemon(id);
		// eslint-disable-next-line
	}, []);

	return (
		<main className='container main-pokemon'>
			{
				loading ? (
					<Loader />
				) : (
					<>
						<>
							<div className='Slider'>

								<div className='container-img-pokemon'>
									<Carousel variant="dark" >
										<Carousel.Item className='pokeImage'>
											<img
												src={pokemon.sprites.other.dream_world.front_default}
												alt={`Pokemon ${pokemon?.name}`}
											/>

										</Carousel.Item>
										<Carousel.Item className='pokeImage'>
											<img
												src={pokemon.sprites.other.home.front_default}
												alt={`Pokemon ${pokemon?.name}`}

											/>
										</Carousel.Item>
										<Carousel.Item className='pokeImage'>
											<img
												src={pokemon.sprites.other.home.front_shiny}
												alt={`Pokemon ${pokemon?.name}`}
											/>
										</Carousel.Item>
									</Carousel>

								</div>
								<div className='stats'>
									<h1>Estadísticas</h1>
									<div className='stat-group'>
										<span>Hp</span>
										<div className='progress-bar'>
											<ProgressBar animated now={pokemon.stats[0].base_stat} />
										</div>
										<span className='counter-stat'>

											{pokemon.stats[0].base_stat}%
										</span>
									</div>
									<div className='stat-group'>
										<span>Ataque</span>
										<div className='progress-bar'>
											<ProgressBar animated now={pokemon.stats[1].base_stat} />
										</div>
										<span className='counter-stat'>
											{pokemon.stats[1].base_stat}%
										</span>
									</div>
									<div className='stat-group'>
										<span>Defensa</span>
										<div className='progress-bar'>
											<ProgressBar animated now={pokemon.stats[2].base_stat} />
										</div>
										<span className='counter-stat'>
											{pokemon.stats[2].base_stat}%
										</span>
									</div>
									<div className='stat-group'>
										<span>Ataque Especial</span>
										<div className='progress-bar'>
											<ProgressBar animated now={pokemon.stats[3].base_stat} />
										</div>
										<span className='counter-stat'>
											{pokemon.stats[3].base_stat}%
										</span>
									</div>
									<div className='stat-group'>
										<span>Defensa Especial</span>
										<div className='progress-bar'>
											<ProgressBar animated now={pokemon.stats[4].base_stat} />
										</div>
										<span className='counter-stat'>
											{pokemon.stats[4].base_stat}%
										</span>
									</div>
									<div className='stat-group'>
										<span>Speed</span>
										<div className='progress-bar'>
											<ProgressBar animated now={pokemon.stats[5].base_stat} />
										</div>
										<span className='counter-stat'>
											{pokemon.stats[5].base_stat}%
										</span>
									</div>
								</div>

							</div>

							<div>
								<div className='container-info-pokemon'>
								
								<div className='cardsPokemon'>
								<p>Id Pokemon</p>
								<div className='group-info'>
									<h2 className='number-pokemon'>#{pokemon.id}</h2>
								</div>
								
								</div>

									<div className='cardsPokemon'>
										<p>Nombre</p>
										<h1>{primerMayuscula(pokemon.name)}</h1>

									</div>
									<div className='cardsPokemon'>
										<p>Tipo</p>
										<div className='card-types info-pokemon-type'>
											{pokemon.types.map(type => (
												<button key={type.type.name} className={`${type.type.name}`}>
													{primerMayuscula(type.type.name)}
												</button>
											))}
										</div>
									</div>
									<div  className='cardsPokemon'> 
									<p>Altura</p>
										<div className='group-info'>
											
											<span>{pokemon.height}</span>
										</div>
									</div>
									<div  className='cardsPokemon'>
									<p>Peso</p>
										<div className='group-info'>
											
											<span>{pokemon.weight}KG</span>
										</div>
									</div>
								</div>
							</div>
						</>
					</>
				)
			}
		</main>
	)
}
