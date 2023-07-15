import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const [id, setID] = useState(null);


    const updateAPIData = async (event) => {
        event.preventDefault();
        await axios.put(`https://632fe3bf591935f3c886b34d.mockapi.io/fake/${id}`, {
            firstName,
            lastName
        })
        navigate('/')
    }

    useEffect((data) => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        console.log(localStorage.getItem('First Name'));
    }, []);

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center align-items-center background'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body cardColor" >
                        <form className='text-center' onSubmit={updateAPIData} >
                            <div >
                                <h1>Update User</h1>
                            </div>
                            <div className="row my-2">
                                <div className="row g-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" value={firstName}
                                            onChange={(event) => { setFirstName(event.target.value) }} />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" value={lastName}
                                            onChange={(event) => { setLastName(event.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 button" >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update