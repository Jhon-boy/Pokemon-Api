import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { getAuth, signOut } from "firebase/auth";
import { BsFilter } from "react-icons/bs";

export const Header = ({ usuario }) => {
	const auth = getAuth();
	const { context, active, setActive } = useContext(PokemonContext);
	console.log(context);
	const logOut = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem('credentials');
			}).catch((error) => {
				console.log(error);
			});
	}

	return (
		<>
			<header className='container'>
				<div className='icon-filter' onClick={() => setActive(!active)}>
					<span>Filtrar</span>
					<span className='filters'> <BsFilter style={{ color: 'black', fontSize: '35px' }} /> </span>
					
				</div>
				<Link to='/' className='logo'>
					<img
						src='https://www.pngarts.com/files/3/Pokemon-Logo-PNG-Image.png'
						alt='Logo Pokedex'
					/>
				</Link>
				<span> {usuario.email}</span>
				<button className='btnCerrar' onClick={logOut} >Cerrar Sesión</button>
			</header>

			<Outlet />
		</>

	)
}
