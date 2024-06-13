import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    const [data, changeData] = useState(
        {
            "emailid": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8072/signin", data).then(
            (response) => {  
                console.log(response.data)     
                if (response.data.status == "success") {
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }).catch()
    }
  return (
    <div>
        <h1 align="center">SIGN IN</h1><br></br><br></br>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
            
                            <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler} />
                            </div></center><br></br>
                            
                            <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler}/>
                            </div></center>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <center><button className="btn btn-primary" onClick={readValue}>Login</button></center>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><Link to='/'>New User</Link></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Signin