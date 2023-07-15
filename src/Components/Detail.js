import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {

  const { id } = useParams();
  const [data, setData] = useState({})

  useEffect(() => {

    onView()
  }, []);
  const onView = async (data) => {
    // let { firstName, lastName, id } = data;
    // localStorage.setItem('ID', id);
    // localStorage.setItem('First Name', firstName);
    // localStorage.setItem('Last Name', lastName);

    await axios.get(`https://632fe3bf591935f3c886b34d.mockapi.io/fake/${id}`).then((res) => {
      setData(res);
    })
    // console.log(firstName);
    // console.log(lastName);
    // navigate(`/detail${'/'}${id}`)
  }


  return (

    <>detail
      {
        <div>
          {
            data.map((data) => {
              return (
                <>
                  <div>{data.firstName}</div>
                </>
              )
            })}
        </div>}
    </>
  )
}

export default Detail