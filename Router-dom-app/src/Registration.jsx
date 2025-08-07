import React from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function Registration() {
    let nav = useNavigate();
    return (
        <div>
            <form action="">
                <div className='register'>
                    <input type="text" placeholder='First Name' className='inp' /><br />
                    <input type="text" placeholder='Second Name' className='inp' /><br />
                    <input type="email" placeholder='Email' className='inp' /><br />
                    <input type="Password" placeholder='Password' className='inp' /><br />
                    <button type='submit' className='btn btn-primary'
                        onClick={() => nav('/login')}
                    >Register</button>
                </div>


            </form>

        </div>
    )
}

export default Registration