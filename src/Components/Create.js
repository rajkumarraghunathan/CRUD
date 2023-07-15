import React from 'react';
import '../Styles/Create.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {

    })


    const submitForm = (event) => {
        // event.preventDefault();

        if ((firstName && lastName) === '') {
            setDisableButton(false);
            console.log('Enter the Name.......')
            alert('Please enter the Name.......')
        }
        else {
            console.log(firstName);
            console.log(lastName);
            // setDisableButton(true);
            alert('Form is Submitted Sucessfully..............')

            axios.post(`https://632fe3bf591935f3c886b34d.mockapi.io/fake`, {
                firstName,
                lastName
            })
            navigate('/')
        }
    }


    return (
        <div className='d-flex justify-content-center align-items-center background'>
            <div className="card formColor" >
                <div className='row g-0 '>
                    <div className='col-md-4 d-flex flex-column justify-content-center align-items-center image'>
                        <h2 className=''>Welcome</h2>
                        <p>Create a new user</p>
                    </div>
                    <div className='col-md-8'>
                        <div className="card-body  p-5 cardColor">


                            <form className='text-center' onSubmit={submitForm}>
                                <div >
                                    <h1>New User</h1>
                                </div>
                                <div className="row my-2">
                                    <div className="row g-3">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                                                onChange={(event) => { setFirstName(event.target.value) }} />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                                                onChange={(event) => { setLastName(event.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3 button" >Submit</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create

