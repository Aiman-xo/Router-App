import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let nav = useNavigate();
    return (
        <div>
            <form action="">
                <div className='register'>

                    <input type="email" placeholder='Email' className='inp' /><br />
                    <input type="Password" placeholder='Password' className='inp' /><br />
                    <button type='submit' className='btn btn-success'
                        onClick={() => nav('/home')}
                    >LogIn</button>
                </div>


            </form>

        </div>
    )
}

export default Login