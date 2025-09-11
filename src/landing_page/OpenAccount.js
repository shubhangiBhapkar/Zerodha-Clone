import React from 'react';
function OpenAccount() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <div className="col ">
                    <h1 className='mt-5'>Open a Zerodha account</h1>
                    <p className='mt-4 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className='btn btn-primary mt-4 fs-5 mb-5 ' 
                    style={{ width:"20%" ,height:"20%", margin:'0 auto'}}>
                        Signup up for free</button>
                </div>
            </div>   
        </div>
     );
}

export default OpenAccount;