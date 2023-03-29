import React, { useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { getAuth, signOut } from "firebase/auth";
import { BsFilter } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

export const Header = ({ usuario }) => {
	const auth = getAuth();
	const { context, active, setActive } = useContext(PokemonContext);
	const { imputChange, valueSearch, onResetForm } = useContext(PokemonContext);
	const navigate = useNavigate();
	const onSearchSubmit = (e) => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch
		});
		onResetForm();
	}
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
				{/* <button className='btnCerrar' onClick={logOut} >Cerrar Sesión</button> */}
				<button className='btnCerrar' onClick={handleShow} >Cerrar Sesión</button>
			</header>

			<div className='formSearch'>
				<div className='container-filter container'>
				</div>
				<form onSubmit={onSearchSubmit} className='formS'>
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
							value={valueSearch}
							onChange={imputChange}
							placeholder='Buscar nombre de pokemon'
						/>
					</div>

					<button className='btn-search'>Buscar</button>
				</form>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Cerrando Sesión!</Modal.Title>
				</Modal.Header>
				<Modal.Body>¿Estas seguro de abandonar la página?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose} style={{ background: 'red' }}>
						Cancelar
					</Button>
					<Button variant="primary" onClick={logOut} style={{ background: '#0896ba' }}>
						Si, Salir
					</Button>
				</Modal.Footer>
			</Modal>

			<Outlet />
		</>

	)
}
