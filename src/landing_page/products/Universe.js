import React from 'react';
function Universe() {
    return (
        <>
            <div className="container pt-5">
                <div className="row text-center mt-5 pt-5 pb-5">
                    <div className="col">
                        <h1>The Zerodha Universe</h1>
                        <p className='mt-4 fs-5 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                    </div>
                </div>

                <div className="row text-center text-muted">

                    {/* Column 1 */}
                    <div className="col-4 pt-4">
                        <div className="mb-4">
                            <img src="media/Images/smallcaseLogo.png" alt="Smallcase" style={{ width: "250px" }} />
                            <p className="mt-4 fs-5 pb-5">Thematic Investing platform</p>
                        </div>
                        <div>
                            <img src="media/Images/zerodhaFundhouse.png" alt="Fundhouse" style={{ width: "250px" }} />
                            <p className="mt-4 fs-5 pb-5">Our asset management venture</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-4 pt-4">
                        <div className="mb-4">
                            <img src="media/Images/streakLogo.png" alt="Streak" style={{ width: "250px" }} />
                            <p className="mt-4 fs-5 pb-5">Algo & strategy platform</p>
                        </div>
                        <div>
                            <img src="media/Images/goldenpiLogo.png" alt="GoldenPi" style={{ width: "250px" }} />
                            <p className="mt-4 fs-5 pb-5">Bonds trading platform</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-4 pt-4">
                        <div className="mb-4">
                            <img src="media/Images/sensibullLogo.svg" alt="Sensibull" style={{ width: "250px" }} />
                            <p className="mt-4 fs-5 pb-5">Option trading platform</p>
                        </div>
                        <div>
                            <img src="media/Images/dittoLogo.png" alt="Ditto" style={{ width: "250px" }} />
                            <p className="mt-4 fs-5 pb-5">Personalized advice</p>
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                <button className='btn btn-primary mt-4 fs-3 mb-5  '
                    style={{ width: "20%", height: "30%" }}>
                    Signup up for free</button>
                </div>
            </div>


        </>
    );
}

export default Universe;