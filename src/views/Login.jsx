import React from 'react';
import '../styles/Login.css';
import img_form_container from '../assets/login_img.png';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className='container'>
                <div className='form_container'>
                    <div className='header'>
                        <h2>WELCOME BACK!</h2>
                        <p>Don't have a accoun, <span><Link to={'/register'}>Sing Up</Link></span></p>
                    </div>
                    <div className='form_login'>
                        <form>
                            <label>Username</label>
                            <input placeholder='daniel123@gmail.com' type='text' required />

                            <label>Password</label>
                            <input type='password' placeholder='*******' required/>

                            <div className='options'>
                                <div className=''>
                                    <input type='checkbox' /> Remember me
                                </div>
                                <div className='forget_password'>
                                    <p>Forget Password?</p>
                                </div>
                            </div>
                            <button className='sing_up'>Sing Up</button>
                        </form>
                    </div>
                </div>
                <div className='img_form_container'>
                    <img src= {img_form_container} className='img_form_container_img' />
                </div>
            </div>
        </>
    )
}
