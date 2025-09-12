import React from 'react';
function Team() {
    return (
        <div className="container  text-muted">
            <div className="row pt-5">

                <div className="col-5 text-center pt-5 mt-5 pb-5">
                     <img src='media/Images/shubhangiBhapkar.jpg' style={{ borderRadius: "100%", height: "250px", width: "250px", objectFit: "cover" }}
></img>
                     <p className='fs-4 mt-1 pt-1'>Shubhangi Bhapkar</p>
                     <p>Founder CEO</p>
                </div>

                <div className="col-7 " style={{ lineHeight: "1.8" }}>
                    <h2 className='mb-5 text-dark'>People</h2>
                    <p className='fs-5'>Shubhangi bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p className='fs-5'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p className='fs-5'>Playing basketball is his zen.</p>

                    <p className='fs-5'>Connect on <a href='https://github.com/shubhangiBhapkar' className='text-decoration-none'>HomePage</a> / <a href='#' className='text-decoration-none'>TradingQnA</a> / <a href='#' className='text-decoration-none'>Twitter</a></p>

                </div>
            </div>
        </div>

    );
}

export default Team;