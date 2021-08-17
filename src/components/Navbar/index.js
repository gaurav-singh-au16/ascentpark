import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={'/'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">AsentSpark</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/"} className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to={"/addData"} className="nav-link">Add Data</Link></li>
                    <li className="nav-item"><Link to={"/updateData"} className="nav-link">Update Data</Link></li>
                </ul>
                </header>
        </div>
    )
}

export default Navbar
