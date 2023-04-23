import React, { useEffect, useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as  Yup from 'yup'
import { DevolverUser } from '../server/firebaseController';

import { useNavigate} from 'react-router-dom'


export const Perfil = ({ usuario }) => {

  const [usuarios, setUsuarios] = useState([]);

  //Valores iniciales 
  const initialValues = {
    usuario: usuarios.nombre,
    apellido: usuarios.apellido,
    email: usuarios.correo,
    password:usuarios.nombre,
    sexo: usuarios.sexo
  }
  //Funcion de registro y aprobacion de campos

  const registerSchema = Yup.object().shape(
    {
      usuario: Yup.string()
        .min(3, 'Usuario muy corto ')
        .required('Campo Obligatorio'),
      apellido: Yup.string()
        .required('Campo Obligatorio'),
      email: Yup.string()
        .email('Formato invalido')
        .required('Campo Obligatorio'),
      password: Yup.string()
        .min(7, 'Se necesita al menos 7 caracteres')
        .matches(/[0-9]/, 'Se necesita al menos un Numero')
        .matches(/[a-z]/, 'Se necesita al menos una letra [a-z]')
        .matches(/[A-Z]/, 'Se necesita al menos una letra [A-Z]')
        .required("Campo Obligatorio"),
      confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'La contraseña debe coincidir'),
    }
  )


  const MostrarE = async () => {
    DevolverUser(usuario.email)
      .then((user) => setUsuarios(user))
      .catch((e) =>
        alert('Error + ', e)
      )
  }

  useEffect(() => {
    MostrarE();
// eslint-disable-next-line
  }, [])
       //Funcion de routers para la navegacion 
       const history = useNavigate ();
       const navigateTo = (path) => {
           history(path);
       }
   

  return (
    <>
      <div className="Registro Update">
        <h2 className='title'>Bienvenido</h2>
        <h6 className='subtitle'>Por el momento no es posible actualizar tu Información!!.</h6>

        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}

        >
          {({
            errors,
            touched,
          }) => (
            <Form  >
              <div className='DatosP '>
                <div className='mainUser'>
                <h6 className='titlesUser'>Nombre</h6>
                    <input
                  placeholder='Nombre'
                  className="form-control"
                  type="text"
                  id='usuario'
                  name='usuario'
                  defaultValue={usuarios.nombre}
                  disabled
                />

                {
                  errors.usuario && touched.usuario &&
                  (

                    <ErrorMessage name='usuario' className='Errores' component='div'></ErrorMessage>

                  )
                }
                </div>
                <span>  </span>
               <div  className='mainUser'>
               <h6 className='titlesUser apellido'>Apellido</h6>
                 <input
                  type='text'
                  placeholder='Apellido'
                  className="form-control"
                  id='apellido'
                  name='apellido'
                  defaultValue={usuarios.apellido}
                  disabled

                />
                {
                  errors.apellido && touched.apellido &&
                  (
                    <ErrorMessage name='apellido' className='Errores' component='div'></ErrorMessage>
                  )
                }

               </div>
               
              </div>

              <div className='Datos'>
              <div  className='mainUser'>
              <h6 className='titlesUser'>Género</h6>
                 <select
                  className="form-select"
                  aria-label="Default select example"
                  name="sexo"
                  id="sexo"
                  defaultValue={usuarios.sexo}
                >

                  <option value="Femenino">{usuarios.sexo}</option>
                  <option value="Masculino">Hombre</option>
                  <option value="Otro">Otro</option>
                </select>

              </div>

              <div  className='mainUser'>
              <h6 className='titlesUser'>Correo</h6>
                 <input
                  type='email'
                  placeholder='Correo electrónico'
                  className="form-control"
                  id='email'
                  name='email'
                  defaultValue={usuarios.correo}
                  disabled
                />
                {
                  errors.email && touched.email &&
                  (
                    <ErrorMessage name='email' className='Errores' component='div'></ErrorMessage>
                  )
                }

              </div>
              <div  className='mainUser'>
                 <h6 className='titlesUser'>Contraseña</h6>
                 <input
                  type='password'
                  placeholder='Contraseña'
                  className="form-control userInput"
                  id='password'
                  name='password'
                  defaultValue={usuarios.nombre}
                  disabled
                />
                {
                  errors.password && touched.password &&
                  (
                    <ErrorMessage name='password' className='Errores' component='div'></ErrorMessage>
                  )
                }
              </div>
             

                <div>

                </div>
               
              

              </div>
              <div className='btn'>
                <button className='btnVolverB' onClick={() => navigateTo('/')}> Volver </button>
              </div>
            </Form>
          )
          }

        </Formik>

      </div>
    </>
  )
}
