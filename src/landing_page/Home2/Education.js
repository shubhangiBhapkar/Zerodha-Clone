import React from 'react';
function Education() {
    return (  
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src='media/Images/education.svg' alt='education'></img>
                </div>
                <div className="col-6 mt-5 pt-4">
                    <h3 className='mb-4 fs-2'>Free and open market education</h3>
                    <p className='mb-4 fs-5'>Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.</p>
                    <a href='#' className='mb-4 fs-5 ' style={{textDecoration:"none"}}>Varasity <   i class="fa-solid fa-arrow-right"/></a>

                    <p className='mt-4 fs-5'>TradingQ&A, the most active trading and investment community in 
                        India for all your market related queries.</p>
                    <a href='#' className='mb-4 fs-5 'style={{textDecoration:"none"}}>TradingQ&A  <  i class="fa-solid fa-arrow-right"/></a>
                </div>
            </div>
        </div>
    );
}

export default Education;