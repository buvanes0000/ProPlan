import React from 'react';
import googleplay from "../assets/googleplay.png"
import applestore from "../assets/applestore.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer py-14">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h4 className="text-xl font-semibold mb-4">company</h4>
                        <ul className='font-thin'>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">about us</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">our services</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">privacy policy</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h4 className="text-xl font-semibold mb-4">get help</h4>
                        <ul className='font-thin'>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">FAQ</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">
                                Rating</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">returns</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">order status</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">payment options</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h4 className="text-xl font-semibold mb-4">Plans</h4>
                        <ul className='font-thin'>
                         
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300 ">Monthly plan</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">Yearly Plan</a></li>
                            <li><a href="#" className="text-slate-700 text-[0.8rem] font-[300] hover:text-blue-500 transition duration-300">One time payment</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                        <h4 className="text-xl font-semibold mb-4">follow us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-blue-800 bg-opacity-20 rounded-full flex items-center justify-center text-white transition duration-500 hover:bg-white hover:text-gray-800"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="w-10 h-10 bg-blue-800 bg-opacity-20 rounded-full flex items-center justify-center text-white transition duration-500 hover:bg-white hover:text-gray-800"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="w-10 h-10 bg-blue-800 bg-opacity-20 rounded-full flex items-center justify-center text-white transition duration-500 hover:bg-white hover:text-gray-800"><FontAwesomeIcon icon={faInstagram} /></a>

                        </div>
                        <div className='download-buttons flex gap-1 flex-col'>
                            <div className='google-play w-[10rem] flex justify-evenly items-center mt-5 bg-black p-2 rounded-md cursor-pointer'><img src={googleplay} className='object-cover h-[30px] w-[30px]' alt="" /><p className='text-white text-sm'>Google Play</p></div>
                            <div className='google-play w-[10rem]  flex justify-evenly items-center mt-5 bg-black p-2 rounded-md cursor-pointer'><img src={applestore} className='object-cover h-[30px] w-[30px]' alt="" /><p className='text-white text-sm'>Apple store</p></div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
