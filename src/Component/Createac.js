import React, { useState } from "react";
import axios from "axios";


function Createac() {
    var [p,setPin]=useState()
    var [n,setName]=useState()
    var [f,setFname]=useState()
    var [e,setEmail]=useState()
    var [ph,setPhone]=useState()
    var [g,setGender]=useState()
    var [c,setCountry]=useState()
    var [s,setState]=useState()
    var [ct,setCity]=useState()
    var [a,setAmount]=useState()

    var [msg,setMsg]=useState()
    var cAccount=async()=>{
        var res=await axios.get("http://localhost:3000/account")
        var x=res.data.length
        var ac="SBI"
        if(x>0){
            x=x+101
            ac=ac+x
        }
        else 
        ac="SBI101"
    var dt={
        "acno":ac,
        "pin":p,
        "name":n,
        "fname":f,
        "email":e,
        "phone":ph,
        "gender":g,
        "country":c,
        "state":s,
        "city":ct,
        "amount":a

    }
    res=await axios.post("http://localhost:3000/account",dt)
    setMsg("Acount opean sucessfuly with ac number "+ac)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
            </div>
            <div className="col-md-8" style={{"border":"2px solid black","margin-top":"10pxpow"}}>
            <div className="container my-5">
                <h2 className="text-center mb-4">Create Your Bank Account</h2>
                <hr/><center><h3>{msg}</h3></center><hr/>
           
           <div className="row">
            <div className="col">
            <label>Enter Pin</label>
            <input type="number" className="form-control" onChange={(event)=>setPin(event.target.value)}></input>
            
            </div>
           </div>


           <div className="row">
            <div className="col">
            <label>Enter Name</label>
            <input type="text" className="form-control" onChange={(event)=>setName(event.target.value)}></input>
            </div>
           </div>
               
           <div className="row">
            <div className="col">
            <label>Enter User Father Name</label>
            <input type="text" className="form-control" onChange={(event)=>setFname(event.target.value)}></input>
            </div>
           </div>

           <div className="row">
            <div className="col">
            <label>Enter User Email</label>
            <input type="text" className="form-control" onChange={(event)=>setEmail(event.target.value)}></input>
            
            </div>
           </div>

           <div className="row">
            <div className="col">
            <label>Enter User Phone No</label>
            <input type="text" className="form-control" onChange={(event)=>setPhone(event.target.value)}></input>
            
            </div>
           </div>
           
           <div className="row">
            <div className="col">
            <label>Enter User Gender</label>
            <input type="text" className="form-control" onChange={(event)=>setGender(event.target.value)}></input>
            
            </div>
           </div>

           <div className="row">
            <div className="col">
            <label>Enter Country</label>
            <input type="text" className="form-control" onChange={(event)=>setCountry(event.target.value)}></input>
            
            </div>
           </div>
           
           
           <div className="row">
            <div className="col">
            <label>Enter State</label>
            <input type="text" className="form-control" onChange={(event)=>setState(event.target.value)}></input>
            
            </div>
           </div>
           
           <div className="row">
            <div className="col">
            <label>Enter City</label>
            <input type="text" className="form-control" onChange={(event)=>setCity(event.target.value)}></input>
            
            </div>
           </div>
           

           <div className="row">
            <div className="col">
            <label>Enter Amount</label>
            <input type="text" className="form-control" onChange={(event)=>setAmount(event.target.value)}></input>
            <br/> <br/>
            <button className="btn btn-primary" onClick={()=>cAccount()}>Submit</button>
           
            </div>
            
           </div>
           
           
           

                </div>
            </div>
            </div>
        </div>
    );
}

export default Createac;
