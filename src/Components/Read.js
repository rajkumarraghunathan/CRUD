import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Read = () => {
    const navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    const [response,setResponse] =useState([]);



    const editData = (data) => {
        let { firstName, lastName, id } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        console.log(data);
    }
    useEffect(() => {
        getAPI();

    }, [])

    const onDelete = async (id) => {
        await axios.delete(`https://632fe3bf591935f3c886b34d.mockapi.io/fakeData/${id}`)
        getAPI();
    }
    const getAPI = async () => {
        const response = await axios.get(`https://632fe3bf591935f3c886b34d.mockapi.io/fakeData`);
        setAPIData(response.data);
    }
const onView =async(data) =>{
    let { firstName, lastName, id } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
   
    await axios.get(`https://632fe3bf591935f3c886b34d.mockapi.io/fakeData/${id}`,{
        firstName,
        lastName,
    }).then((res)=>{
        // let {fn,ln,id} = res;
        // console.log(fn);
        // console.log(ln);
       
        setResponse(res); 
        console.log(response);  
        console.log(firstName);  
        console.log(lastName);  
        })
   
 

    navigate(`/detail${'/'}${id}`)
}


    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <Link to='/create'>  <button className='btn btn-success ' type="">+ Create User</button></Link>
            </div>

            <table className="table table-striped table-dark table-hover shadow my-3">
                <thead className="text-center">
                    <tr>
                        {/* <th scope="col">Id</th> */}
                        <th scope="col">ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Details</th>

                    </tr>
                </thead>
                <tbody className="text-center">
                    {APIData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td className="align-middle">{data.id}</td>
                                <td className="align-middle">{data.firstName}</td>
                                <td className="align-middle">{data.lastName}</td>
                                <td className="align-middle"><Link to='/update' style={{ textDecoration: 'none' }}> <button type="button" onClick={() => editData(data)} className="btn btn-success">Edit</button></Link></td>
                                <td className="align-middle"><button type="button" onClick={() => onDelete(data.id)} className="btn btn-danger">Delete</button></td>
                                <td className="align-middle"><button type="button" onClick={() => onView(data)} className="btn btn-primary">View Detail</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Read