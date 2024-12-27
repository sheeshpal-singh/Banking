import React from "react";
function Pinchange(){

    return(
<div>
    <center><h3>Change Pin</h3></center>
    <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  Enter Ac No
                    <input type="number" className="form-control"  ></input> <br/> 
                   Old pin
                    <input type="number" className="form-control"  ></input> <br/> 

                    Confirm Pin
                    <input type="number" className="form-control"  ></input> <br/> 
                   
                   <button className="btn btn-primary">Submit</button> 

                </div>
         </div>
</div>
    )
}
export default Pinchange;