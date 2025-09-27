import React from 'react';

const Footer = () => {
    return (
        <div className='text-white  bg-black px-20 pt-20 pb-7 '>
            <div className='mb-10'>
                <div className='md:grid md:grid-cols-5 grid grid-cols-2 gap-2 items-stretch'>
                    <div className='md:w-[300px] space-y-1 p-2'>
                        <h2 className='text-xl '>CS — Ticket System</h2>
                        <p className='w-40 h-fit'>This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved.</p>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-xl'>Company</h2>
                        <ul className='text-sm space-y-2'>
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-xl'>Services</h2>
                        <ul className='text-sm space-y-2'>
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-xl'>Information</h2>
                        <ul className='text-sm space-y-2'>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-xl'>Social Links</h2>
                        <ul className='text-sm space-y-2'>
                            <li className='flex gap-2'><img src="/src/assets/icons/x.svg" alt="" />@CS — Ticket System</li>
                            <li className='flex gap-2'><img src="/src/assets/icons/linkedin.svg" alt="" />@CS — Ticket System</li>
                            <li className='flex gap-2'><img src="/src/assets/icons/fb.svg" alt="" />@CS — Ticket System</li>
                            <li className='flex gap-2'><img src="/src/assets/icons/support.svg" alt="" />support@cst.com</li>
                        </ul>
                    </div>
                </div>
                <div className='border-b-1 mt-2'></div>
            </div>
            <div className='text-center'>
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;