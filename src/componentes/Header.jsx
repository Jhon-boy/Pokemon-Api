import React, { useContext, useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import { getAuth, signOut } from "firebase/auth";
import { BsFilter } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import { getUsuario  } from '../server/firebaseController';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { BsFillPersonXFill, BsSearch, BsPersonAdd } from "react-icons/bs"

	
export const Header = ({ usuario }) => {
	const auth = getAuth();
	const { active, setActive } = useContext(PokemonContext);
	const { imputChange, valueSearch, onResetForm } = useContext(PokemonContext);
	const [emailU, setEmailU] = useState('')
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
	let titlee = emailU ? ("Hola, " + emailU) : (usuario.email);

	const logOut = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem('credentials');
			}).catch((error) => {
				console.log(error);
			});
	}
	const MostrarE = async () => {
		await getUsuario(usuario.email)
			.then((user) => setEmailU(user))
			.catch((e) =>
				console('Error + ', e)
			)
		titlee = emailU ? ("Hola, " + emailU) : (usuario.email);
		console.log("GetUsuario()", emailU);
	}
	useEffect(() => {
		const timer = setTimeout(() => {
			MostrarE();
		}, 1000);

		return () => clearTimeout(timer)

	},)



	return (
		<>
			<div className='cabecera'>
				<header className='container'>
					<div className='icon-filter' onClick={() => setActive(!active)}>
						<span>Filtrar</span>
						<span className='filters'> <BsFilter style={{ color: 'white', fontSize: '35px' }} /> </span>

					</div>

					<div className='formSearch'>
						<div className='container-filter container'>
						</div>
						<form onSubmit={onSearchSubmit} className='formS'>
							<div className='form-group'>

								<input
									type='search'
									name='valueSearch'
									id=''
									value={valueSearch}
									onChange={imputChange}
									placeholder='Buscar nombre de pokemon'
								/>
								<span className='iconSearch'>
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
								</span>
							</div>

						</form>


					</div>
					<Link to='/' className='listasH' > Inicio</Link>
					<Link to='/Contactos' className='listasH' >  Contactos</Link>
					<Link to='/infoPage' className='listasH' >  Información </Link>
					<div>

						<div>
							<div>
								<DropdownButton
									align="end"
									title={titlee}
									id="dropdown-menu-align-end"
									className=''
								>
									<Dropdown.Item eventKey="1" onClick={() => navigate('/perfil')}><BsPersonAdd />	Ver Perfil</Dropdown.Item>
									<Dropdown.Item eventKey="2" href='https://pokeapi.co'><BsSearch /> Pokemon Api</Dropdown.Item>
									<Dropdown.Divider />
									<button className='btnCerrar' onClick={handleShow} > <BsFillPersonXFill /> Cerrar Sesión</button>
								</DropdownButton>
							</div>
						</div>
					</div>
					{/* <button onClick={() => MostrarE()}>Obtener Email</button> */}


				</header>
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
