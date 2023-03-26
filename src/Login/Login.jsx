
import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import app from '../server/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const auth = getAuth(app)
const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Formato de Emial inválido')
            .required('Email es obligatorio'),
        password: Yup.string().required('Contraseña es obligatorio')
    }
)
const CredencialesInicial = {
    email: '',
    password: ''
}

//Props

export const Login = (props) => {
    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    }
    const iniciarSesion = async (e) => {
        e.preventDefault();
        const emailRef = e.target.email.value;
        const contraseñaRef = e.target.password.value;
        try {
            await signInWithEmailAndPassword(auth, emailRef, contraseñaRef);
            localStorage.setItem('credentials', auth);
            navigateTo('/');
        } catch (error) {
    alert('Correo o contraseña Invalido');
}
    }
return (
    <div>
        <Formik
            initialValues={CredencialesInicial}
            //Yup Validaciones esquemas
            validationSchema={loginSchema}
            onSubmit={
                async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                }} >
            {({
                errors,
                touched,
                isSubmitting
            }) => (
                <Form onSubmit={iniciarSesion} >
                    <center>
                        <div className='Ingreso'>
                            <div className="mb-3">
                                <label className="form-label">Correo</label>
                                <Field
                                    className="form-control"
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder='example@gmail.com'

                                /> {
                                    errors.email && touched.email &&
                                    (

                                        <ErrorMessage name='email' className='Errores' component='div'></ErrorMessage>

                                    )
                                }

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <Field className="form-control"
                                    type="password"
                                    id='password'
                                    name='password'

                                />
                                {
                                    errors.password && touched.password &&
                                    (
                                        ( //Mostramos el error en caso de ser invalido con un DIV

                                            <ErrorMessage name='password' className='Errores' component='div'></ErrorMessage>

                                        )
                                    )
                                }
                            </div>
                            <button type='submit' className='btn btn-primary mb-3'>Ingresar</button>
                            {isSubmitting ? (<p>Sending....</p>) : null}
                            <br></br>
                            <span className='NewCount' onClick={() => navigateTo('/register')}> ¿No tienes Cuenta? Crea una! </span>
                        </div>
                    </center>


                </Form>
            )
            }

        </Formik>

    </div>

);
}

