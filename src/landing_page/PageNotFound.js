import React from 'react';
function PageNotFound() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <div className="col ">
                    <img src='media/Images/homeHero.png'className="img-fluid w-100 mb-5"></img>
                    <h1 className='mt-5'>404 Page Not Found</h1>
                    <p>the server could not find the webpage you requested.</p>
                    
                </div>
            </div>

                
            
        </div>
     );
}

export default PageNotFound;