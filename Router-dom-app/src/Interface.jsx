import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Interface() {
    const nav = useNavigate();
    return (
        <div>
            <h1>Interface</h1>

            <button onClick={() => nav('/register')} className='btn btn-dark'>Enter</button>
        </div>
    )
}

export default Interface