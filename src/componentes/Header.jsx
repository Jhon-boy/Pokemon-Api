import React, { useContext } from 'react'
import { Outlet , Link, useNavigate} from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { getAuth, signOut } from "firebase/auth";


export const Header = ({usuario}) => { 
	const auth = getAuth();
    const context = useContext(PokemonContext);
    const { imputChange , valueSearch  , onResetForm } = useContext(PokemonContext);
	const navigate = useNavigate();
    //Evento de forumalario 

    const onSearchSubmit = (e) => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch 
		});
		onResetForm();
    } 

	const logOut = () =>{
		signOut(auth)
        .then(() => {
			localStorage.removeItem('credentials');
			navigate('/')
          }).catch((error) => {
            console.log(error);
          });
	}

    return (
        <>
        <header className='container'>
				<Link to='/' className='logo'>
					<img
						src='https://www.pngarts.com/files/3/Pokemon-Logo-PNG-Image.png'
						alt='Logo Pokedex'
					/>
				</Link>

				<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							type='search'
							name='valueSearch'
							id=''
							value={valueSearch }
							onChange={imputChange}
							placeholder='Buscar nombre de pokemon'
						/>
					</div>

					<button className='btn-search'>Buscar</button>
				</form>
				<span> {usuario.email}</span>
				<button onClick={logOut} >Cerrar Sesión</button>
			</header>

            <Outlet />
        </>

    )
}
