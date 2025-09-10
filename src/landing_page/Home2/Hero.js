import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <div className="col ">
                    <img src='media/Images/homeHero.png'className="img-fluid w-100 mb-5"></img>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary mt-4 fs-5 mb-5 ' style={{ width:"20%" ,height:"7%", margin:'0 auto'}}>Signup for free</button>
                </div>
            </div>

                <div className="container ">
                    <div className="row mt-5 ">
                        <div className="col-6 ">
                            <img src='media/Images/largestBroker.svg' style={{width:"80%"}}></img>
                        </div>
                        <div className="col-6 mt-3">
                            <h1>
                                Largest stock broker in India
                            </h1>
                            <p className="pt-3">
                                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores 
                                of equity investments  making us India’s largest broker
                            </p>
                            
                            <div className="row pt-3 ">
                                <div className="col-6 ">
                                    <ul>
                                        <li><p>Features and Options</p></li>
                                        <li><p>Comodity and derivatives </p></li>
                                        <li><p>Currency derivatives</p></li>
                                    </ul>
                                </div>
                                <div className="col-6 ">
                                    <ul>
                                        <li><p>Stocks & IPOs</p></li>
                                        <li><p>Direct mutual Funds</p></li>
                                        <li><p>Bonds</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <img src='media/Images/pressLogos.png' className="img-fluid w-100 mb-5"></img>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
     );
}

export default Hero;