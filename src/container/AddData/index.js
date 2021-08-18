import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function AddData() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [street_address, setStreetAddress] = useState('')
    const [city_name, setCityName] = useState('')
    const [country_name, setCountryName] = useState('')
    const [state_name, setStateName] = useState('')
    const [pin_code, setPinCode] = useState('')
    const [status, setStatus] = useState('')
    const history = useHistory()

    const getData = () => {
        const userData = {
            name,
            email,
            phone,
            username,
            street_address,
            city_name,
            country_name,
            state_name,
            pin_code,
            status
        }
        console.log(userData)
        async function postData() {
            await axios({
                "method": "POST",
                "url": "https://www.webappfactory.co/shaktipeeth/public/api/add-user",
                userData
              })
              .then((res) => {
                console.log('sucessfully post data')
                window.alert('Data Sucessfully Added')
                history.push('/')
    
              })
              .catch((error) => {
                console.log(error)
              })
        }
        postData()
    }


    return (
        <>
        <Navbar />
        <h1 className='container text-center display-5 mt-3 my-3 text-warning'>Add Data</h1>
        <div className='container border border-dark w-50 bg-dark text-white'>
        <form>
            <div className="mb-3 mt-3">
                <label className="form-label">Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" aria-describedby="emailHelp" 
                value={name}
                onInput={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address<span className='text-danger h6'>*</span></label>
                <input type="email" className="form-control" aria-describedby="emailHelp" 
                value={email}
                onInput={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">phone<span className='text-danger h6'>*</span></label>
                <input type="tel" className="form-control" 
                value={phone}
                onInput={(e)=>setPhone(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">User Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                value={username}
                onInput={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Street Address<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                value={street_address}
                onInput={(e)=>setStreetAddress(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">City Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                value={city_name}
                onInput={(e)=>setCityName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Country Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                value={country_name}
                onInput={(e)=>setCountryName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">State Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                value={state_name}
                onInput={(e)=>setStateName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Pincode<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                value={pin_code}
                onInput={(e)=>setPinCode(e.target.value)}
                />
            </div>
            <select className="form-select" aria-label="Default select example"
            onChange={(e)=>setStatus(e.target.value)}
            >
                <option>Status*</option>
                <option value="1">Active</option>
                <option value="0">InActive</option>
            </select>
            <button type="button" className="btn btn-primary my-3 btn-danger"
            onClick={()=>getData()}
            >Submit</button>
        </form>
        </div>
        <Footer />
        </>
    )
}

export default AddData
