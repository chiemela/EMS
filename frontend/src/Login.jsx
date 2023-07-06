import React, { useState } from 'react'
import "./style.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if (res.data.Status === 'Success') {
                navigate('/');
            } else {
                setError(res.data.Error);
            }
        })
        .catch(err => console.log(err));
    }

    const styles = {
        formContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100%',
        }
    }
  return (
    <div className="container h-100" style={styles.formContainer}>
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-4">
            <div className="card shadow">
                <div className="card-body">
                <div className='text-danger'>
                    {error && error}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" name='email' onChange={e => setValues({...values, email: e.target.value})} id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" className="form-control" name='password' onChange={e => setValues({...values, password: e.target.value})} id="password" placeholder="Enter password"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-1" >Login</button>
                    <p class="text-center" style={styles.formCenter}>You agree to Terms and Policies.</p>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login