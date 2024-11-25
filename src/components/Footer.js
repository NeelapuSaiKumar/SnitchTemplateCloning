import './Footer.css';
import { IoMdMail} from "react-icons/io";
import { FaEarthAfrica,FaInstagram,FaPinterest,FaTwitter,FaYoutube,FaLinkedinIn,FaFacebook } from 'react-icons/fa6';
function Footer(){
    return(
        <>
        <footer>
        <div className="container w-100">
            <div className="row">
                <div className="col">
                <ul type='none'><h5 style={{fontSize:'15px'}}>Offline Store</h5>
                <li><a href='snitch.co.in' style={{color:'black',fontSize:'12px'}}>Find Stores Near Me</a></li>
                </ul>
                </div>
                <div className="col">
                <ul type='none'><h5 style={{fontSize:'15px'}}>Get to know us</h5>
                <li style={{fontSize:'12px'}}>Contact Us</li>
                <li style={{fontSize:'12px'}}>FAQ's</li>
                <li style={{fontSize:'12px'}}>Blogs</li>
                <li style={{fontSize:'12px'}}>Terms & Conditions</li>
                </ul>
                </div>
                <div className="col-5">
                <ul type='none'><h5 style={{fontSize:'15px'}}>TRACK OR RETURN/EXCHANGE ORDER</h5>
                <li style={{fontSize:'12px'}}>TRACK ORDER</li>
                    <li style={{fontSize:'12px'}}>PLACE RETURN/EXCHANGE REQUEST</li>
                    <li style={{fontSize:'12px'}}>RETURNS/EXCHANGE POLICY</li>
                    </ul>
                </div>
                <div className="col">
                <ul type='none'><h6 style={{fontSize:'14px'}}>CUSTOMER CARE</h6>
                <li style={{fontSize:'11px'}}>Timings: 10 AM - 7 PM (Mon - Sat)</li>
                <li style={{fontSize:'11px'}}>Whatsapp:<u>+916364430801</u></li>
                <li style={{fontSize:'11px'}}>Instagram: @snitch.co.in</li>
                </ul>
                </div>

            </div>
            <div className='col-8'>
                <ul type='none'><h5 style={{fontSize:'15px'}}>Sign up and save</h5>
                <li style={{fontSize:'12px'}}>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</li>
                <li><input className='underline'  type='mail' placeholder='Enter The Mail'/><IoMdMail /></li>
                <li><button className='icon'><FaInstagram/></button>
                <button className='icon'><FaFacebook/></button>
                <button className='icon'><FaYoutube/></button>
                <button className='icon'><FaTwitter/></button>
                <button className='icon'><FaPinterest/></button>
                <button className='icon'><FaLinkedinIn/></button>
                </li>
                </ul>
            </div>
            <footer className='footer'>
                <ul type='none'>
                <li><span style={{marginLeft:'30px'}}>© 2024 SNITCH</span></li>
                <li><span>Made in India, for the World <FaEarthAfrica /></span></li>
                </ul>
            </footer>
        </div>
        </footer>
        </>
    )
};
export default Footer;