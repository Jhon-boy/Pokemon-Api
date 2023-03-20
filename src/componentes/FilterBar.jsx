import React , { useContext} from 'react'
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {
  const {active, hanndlCheckBox } = useContext(PokemonContext);
  return (
    <div className={`container-filters ${active ? 'active': ''}`} >
      <div className='filter-by-type'>
        <span>Tipo</span>
        <div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='grass'
						id='grass'
					/>
					<label htmlFor='grass'>Planta</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='fire'
						id='fire'
					/>
					<label htmlFor='fire'>Fuego</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='bug'
						id='bug'
					/>
					<label htmlFor='bug'>Bicho</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='fairy'
						id='fairy'
					/>
					<label htmlFor='fairy'>Hada</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='dragon'
						id='dragon'
					/>
					<label htmlFor='dragon'>Dragón</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='shadow'
						id='shadow'
					/>
					<label htmlFor='shadow'>Fantasma</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='ground'
						id='ground'
					/>
					<label htmlFor='ground'>Tierra</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='normal'
						id='normal'
					/>
					<label htmlFor='normal'>Normal</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='psychic'
						id='psychic'
					/>
					<label htmlFor='psychic'>Psíquico</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='steel'
						id='steel'
					/>
					<label htmlFor='steel'>Acero</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='dark'
						id='dark'
					/>
					<label htmlFor='dark'>Siniestro</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='electric'
						id='electric'
					/>
					<label htmlFor='electric'>Eléctrico</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='fighting'
						id='fighting'
					/>
					<label htmlFor='fighting'>Lucha</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='flying'
						id='flying'
					/>
					<label htmlFor='flying'>Volador</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='ice'
						id='ice'
					/>
					<label htmlFor='ice'>Hielo</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='poison'
						id='poison'
					/>
					<label htmlFor='poison'>Veneno</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='rock'
						id='rock'
					/>
					<label htmlFor='rock'>Roca</label>
				</div>
				<div className='group-type'>
					<input
						type='checkbox'
						onChange={hanndlCheckBox}
						name='water'
						id='water'
					/>
					<label htmlFor='water'>Agua</label>
				</div>
      </div>
    </div>
  )
}
