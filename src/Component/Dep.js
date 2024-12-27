import React from "react";

function Dep() {
    return (

            <div>
            <center><h1>Deposit form </h1></center>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4" style={{"border":"2px solid black","padding":"50px"}}>
                Enter AC No 
                    <input type="text" className="form-control"  placeholder="Enter ac no "></input> <br/> 
                    Enter Pin No 
                    <input type="text" className="form-control"  placeholder="Enter pin no "></input> <br/> 
                    Enter Amount To Deposit 
                    <input type="text" className="form-control"  placeholder="Enter am  to wid "></input> <br/> 
                   <button className="btn btn-primary">Submit</button> 

                </div>
            </div>
        </div>
    );
}

export default Dep;
