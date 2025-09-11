import React from 'react';
function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row mt-5">
                <div className="col-4 ">
                    <h3 className='pt-5 mb-5'>Unbeatable pricing</h3>
                    <p >We pioneered the concept of discount broking and price transparency 
                    in India. Flat fees and no hidden charges.</p>

                    <a href="#" style={{textDecoration:"none"}} 
                    className='fs-5'>see pricing   
                        <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                
                <div className="col-6 pt-5">
                    <div className="row">
                        <div className="col border">
                            <h1 ><i class="fa-solid fa-indian-rupee-sign mt-5 mb-5" ></i> 0</h1>
                            <p  >Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border">
                            <h1><i class="fa-solid fa-indian-rupee-sign mt-5 mb-5 text-center" ></i> 20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;