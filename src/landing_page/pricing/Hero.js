import React from 'react';
function Hero() {
    return ( 
        <>
            <div className="container pt-5 ">
            <div className="row text-center text-muted border-bottom">
                <div className="col ">
                    <h1 className='mt-5 mb-4 '>Charges</h1>
                    <p className='pt-2 fs-4 mb-5'>List of all charges and taxes</p>
                   
                </div>
            </div>   

            <div className="row  text-muted p-5 mt-5 ">
                <div className="col-4 p-4  ">
                    <img src='media/Images/pricing0.svg'></img>
                    <h1 className='pt-4 mb-5'>Free equity delivery</h1>
                    <p className='fs-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-4 ">
                    <img src='media/Images/intradayTrades.svg'></img>
                    <h1 className='pt-4 mb-5'>Intraday and F&O trades</h1>
                    <p className='fs-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
                         Flat ₹20 on all option trades.</p>
             
                </div>
                <div className="col-4 p-4 ">
                    <img src='media/Images/pricing0.svg'></img>
                    <h1 className='pt-4 mb-5'>Free direct MF</h1>
                    <p className='fs-4'>All direct mutual fund investments 
                        are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero ;