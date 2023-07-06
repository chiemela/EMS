import React, { useState } from 'react'
import axios from 'axios'

function AddEmployee() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        image: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("image", data.image);
        axios.post('http://localhost:8081/create', formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" required autoFocus autoComplete='off'
                onChange={e => setData({...data, name: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required autoComplete='off'
                onChange={e => setData({...data, email: e.target.value})}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" required autoComplete='off'
                onChange={e => setData({...data, password: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label for="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" required autoComplete='off'
                onChange={e => setData({...data, address: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label for="formFile" className="form-label">Select Image</label>
                <input className="form-control" type="file" id="formFile" required
                onChange={e => setData({...data, image: e.target.files[0]})}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    </div>
  )
}

export default AddEmployee