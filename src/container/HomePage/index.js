import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'


function Homepage() {
    let [responseData, setResponseData] = useState([])
    useEffect(() => {
        async function fetchData() {
            await axios({
                "method": "GET",
                "url": "https://www.webappfactory.co/shaktipeeth/public/api/users",
              })
              .then((res) => {
                setResponseData(res.data.data.data)
    
              })
              .catch((error) => {
                console.log(error)
              })
        }
        fetchData()
    },[])
    

    return (
        <>
        <Navbar />
        <div className='container'>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Street Address</th>
                    <th scope="col">City Name</th>
                    <th scope="col">Country Name</th>
                    <th scope="col">State Name</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
            {responseData.map((data, i) => ( 
                   <tbody key={i}>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.username}</td>
                        <td>{data.street_address}</td>
                        <td>{data.city_name}</td>
                        <td>{data.country_name}</td>
                        <td>{data.state_name}</td>
                        <td>{data.pin_code}</td>
                        <td>{data.status === "1"? 'Active':'Inactive'}</td>
                        
                    </tr>
                </tbody>
            ))}
            </table>
        </div>
        <Footer />
        </>
    )
}

export default Homepage
