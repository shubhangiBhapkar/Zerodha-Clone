import React from 'react';
function Stats() {
    return ( 
        <div className="container mt-5">
            <div className="row g-4">
                <div className="col-6 mt-5">
                    <div className='p-5' style={{width:"80%"}}>
                        <h3 className='mb-5'>Trust with confidence</h3>
                        <h5 className='mt-5'>Customer-first always</h5>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, 
                            making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>

                        <h5 className='mt-5'>No spam or gimmicks</h5>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. 
                            High quality apps that you use at your pace, the way you like. Our philosophies.
                        </p>

                        <h5 className='mt-5'>The Zerodha universe</h5>
                        <p>Not just an app, but a whole ecosystem. 
                            Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>

                        <h5 className='mt-5'>Do better with money</h5>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                            but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 ">
                    <img src='media/Images/ecosystem.png' className='img-fluid w-100 mt-5' style={{width:"75%"}}></img>
                    <div>
                        <div className="row text-center" >
                            <div className="col-6">
                                <a href="#" style={{textDecoration:"none"}} className='fs-6'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col-6">
                                <a href="#" style={{textDecoration:"none"}}className='fs-6'>Try kite</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="text-center mb-5">
                <img src='media/Images/pressLogos.png'></img>
            </div>
        </div>
        
     );
}

export default Stats;