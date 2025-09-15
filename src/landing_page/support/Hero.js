import React from 'react';
function Hero() {
    return (
        <>
            <section className="container-fluide pb-5" id="supportHero">
                <div className="p-5 text-center" id="supportWrapper">
                    <h4>Support Portal</h4>
                    <a href=" ">track tickets</a>
                </div>
                <div className="row justify-content-center"  >
                    <div className="col-md-5 p-5">
                        <h1 className='fs-3 pb-4 '>
                            Search for an answers or brower help topics to create a ticket
                        </h1>
                        <input placeholder='How do I activate F&Q' style={{color:"black", width:"50%",fontSize:"150%"}} ></input>
                        <br></br>
                        <a href='' className='pt-4'>Track Account Opening</a>
                        <a href=''>Track segemnt activation</a>
                        <a href=''>Intraday margins</a>
                        <a href=''>kite user manual</a>
                    </div>
                    <div className="col-md-5 p-5">
                        <h1 className='fs-3'>Featured</h1>
                        <ol>
                            <li>
                                <a>Current Takeovers and Delisting -september 2025</a>
                            </li>
                            <li>
                                <a>Latest Intraday leverages - MIS&CO </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;