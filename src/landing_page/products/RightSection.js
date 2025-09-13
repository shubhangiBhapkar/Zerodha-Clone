import React from 'react';
function RightSection( {
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <>
            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-4">
                        <h1 className='mt-5 pt-3 pb-3 fs-2'>{productName}</h1>
                        <p className='fs-5 ' style={{ lineHeight: "1.8em" }}>{productDescription}</p>
                        <div className='fs-5 pb-4'>
                            <a href={learnMore} className=' text-decoration-none'>Learn more  <  i class="fa-solid fa-arrow-right"/></a>
                            
                        </div>
                        
                    </div>
                    <div className="col-8">
                        <img src={imageURL} className='mt-3 ' style={{ width: "80%", borderRadius: "8px" }} />

                    </div>
                </div>
            </div>
                 </>
     );
}

export default RightSection;