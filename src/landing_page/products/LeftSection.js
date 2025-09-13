import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row text-muted">
                    <div className="col-8">
                        <img src={imageURL} className='mt-3' style={{ width: "80%", borderRadius: "8px" }} />
                    </div>
                    <div className="col-4">
                        <h1 className='mt-5 pt-3 pb-3 fs-2'>{productName}</h1>
                        <p className='fs-5 ' style={{ lineHeight: "1.8em" }}>{productDescription}</p>
                        <div className='fs-5 pb-4'>
                            <a href={tryDemo} className=' text-decoration-none'>Try Demo  <  i class="fa-solid fa-arrow-right" /></a>
                            <a href={learnMore} className='p-5 text-decoration-none'>Learn More  <  i class="fa-solid fa-arrow-right" /></a>
                        </div>
                        <div className=''>
                            <a href={tryDemo} className=''><img src="media/Images/googlePlayBadge.svg"></img></a>
                            <a href={appStore} className='p-5 m-3'><img src='media/Images/appstoreBadge.svg'></img></a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSection;