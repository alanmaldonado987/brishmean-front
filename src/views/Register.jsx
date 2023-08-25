import React from 'react';
import '../styles/Register.css';
import img_form_container from '../assets/login_img.png';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <div className='container'>
                <div className='form_container'>
                    <div className='header'>
                        <h2>WELCOME FOR FIRST TIME!</h2>
                        <p>I have a accoun, <span><Link to={'/'}>Sing Up</Link></span></p>
                    </div>
                    <div className='form_login'>
                        <form>
                            <label>Username</label>
                            <input placeholder='daniel123@gmail.com' type='text' required />

                            <div className='names'>
                              <div className='name'>
                                <label>Name</label>
                                <input placeholder='Daniel' type='text' required />
                              </div>

                              <div className='lastname'>
                                <label>Lastname</label>
                                <input placeholder='Armando' type='text' required />
                              </div>
                            </div>

                            <label>Password</label>
                            <input type='password' placeholder='*******' required/>

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
