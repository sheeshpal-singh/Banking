import React from "react";

function Balinq() {
    return (
        <div className="container my-5">
            <h2 className="text-center">Balance Inquiry</h2>
            <p className="lead text-center">Welcome to your balance inquiry page. Here you can view the current balance of your bank account.</p>
            
            {/* Example Balance Information */}
            <div className="alert alert-info text-center">
                <h4>Your Current Balance: ₹50,000</h4>
                <p>Thank you for banking with us. Your funds are safe and secure.</p>
            </div>

            {/* Optional additional information */}
            <div className="mt-4">
                <p className="text-center">For more details, please visit your nearest branch or contact customer support.</p>
            </div>
        </div>
    );
}

export default Balinq;
