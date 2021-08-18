import React,{useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function UpdateData() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fetchEmail, setFetchEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [street_address, setStreetAddress] = useState('')
    const [city_name, setCityName] = useState('')
    const [country_name, setCountryName] = useState('')
    const [state_name, setStateName] = useState('')
    const [pin_code, setPinCode] = useState('')
    const [status, setStatus] = useState('')
    const [realData, setRealData] = useState([])
    const history = useHistory()
    
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
    const fetchUser = () => {
        responseData.filter((data)=>{
            if(fetchEmail === data.email){
                setRealData([data])
            }
            return realData
        })
    }

    const getData = () => {
        const updatedData = {
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
        console.log(updatedData)
        async function postUpdatedData() {
            try {
                console.log(realData)
                if(realData.length !== 0){
                    await axios({
                        "method": "PUT",
                        "url": "https://www.webappfactory.co/shaktipeeth/public/api/edit-user/48",
                        updatedData
                      })
                      .then((res) => {
                        
                        window.alert('Data Sucessfully Updated')
                        history.push('/')
            
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                }else{
                    window.alert('No data Is Updated')
                }
            } catch (error) {
                console.log(error)
            }
        }
        postUpdatedData()
    }
    return (
        <>
        <Navbar />
        <h1 className='container text-center display-5 mt-3 my-3 text-warning'>Update/Edit Data</h1>
        <div className="container mb-3 w-50 border rounded bg-dark text-white">
            <label className="form-label mt-3">Enter Email To Update/Edit Data<span className='text-danger h6'>*</span></label>
            <input type="email" className="form-control" 
            value={fetchEmail}
            onInput={(e)=>setFetchEmail(e.target.value)}
            />
        <div className='text-center'><button type="button" className="btn btn-primary my-3 btn-Success w-50"
            onClick={()=>fetchUser()}
        >Fetch Your Data</button></div>

        </div>
        <div className='container border border-dark w-50 bg-light'>
        <form>
            <div className="mb-3 mt-3">
                <label className="form-label">Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" aria-describedby="emailHelp" 
                defaultValue={realData[0]? (realData[0].name):(name)}
                onInput={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address<span className='text-danger h6'>*</span></label>
                <input type="email" className="form-control" aria-describedby="emailHelp" 
                defaultValue={realData[0]? (realData[0].email):(email)}
                onInput={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">phone<span className='text-danger h6'>*</span></label>
                <input type="tel" className="form-control" 
                defaultValue={realData[0]? (realData[0].phone):(phone)}
                onInput={(e)=>setPhone(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">User Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                defaultValue={realData[0]? (realData[0].username):(username)}
                onInput={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Street Address<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                defaultValue={realData[0]? (realData[0].street_address):(street_address)}
                onInput={(e)=>setStreetAddress(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">City Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                defaultValue={realData[0]? (realData[0].city_name):(city_name)}
                onInput={(e)=>setCityName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Country Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                defaultValue={realData[0]? (realData[0].country_name):(country_name)}
                onInput={(e)=>setCountryName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">State Name<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                defaultValue={realData[0]? (realData[0].state_name):(state_name)}
                onInput={(e)=>setStateName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Pincode<span className='text-danger h6'>*</span></label>
                <input type="text" className="form-control" 
                defaultValue={realData[0]? (realData[0].pin_code):(pin_code)}
                onInput={(e)=>setPinCode(e.target.value)}
                />
            </div>
            <select className="form-select" aria-label="Default select example"
            onChange={(e)=>setStatus(e.target.value)}
            >
                <option>Status*</option>
                <option defaultValue={realData[0]? (realData[0].status):(status)}>Active</option>
                <option defaultValue={realData[0]? (realData[0].status):(status)}>InActive</option>
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

export default UpdateData
