import './Products.css'
import { useState } from 'react';
import { FaSun,FaGift } from 'react-icons/fa';
function Products(){
    const [imgIsHovered1,setImgIsHovered1]=useState(false);
    const [imgIsHovered2,setImgIsHovered2]=useState(false);
    const [imgIsHovered3,setImgIsHovered3]=useState(false);
    const [imgIsHovered4,setImgIsHovered4]=useState(false);
    const [imgIsHovered5,setImgIsHovered5]=useState(false);
    const [imgIsHovered6,setImgIsHovered6]=useState(false);
    const [imgIsHovered7,setImgIsHovered7]=useState(false);
    const [imgIsHovered8,setImgIsHovered8]=useState(false);
    const [imgIsHovered9,setImgIsHovered9]=useState(false);
    const [imgIsHovered10,setImgIsHovered10]=useState(false);
    const [imgIsHovered11,setImgIsHovered11]=useState(false);
    const [imgIsHovered12,setImgIsHovered12]=useState(false);
    const [imgIsHovered13,setImgIsHovered13]=useState(false);
    return(
        <>
        <div className='container'>
        <div className='container1'>
            <div className='card1'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered1(true)} 
                    onMouseLeave={()=>setImgIsHovered1(false)}>
                        <img className='imgc1'src={imgIsHovered1 ? 'https://www.snitch.co.in/cdn/shop/files/4MSS3622-02-M29.jpg' : 'https://www.snitch.co.in/cdn/shop/files/4MSS3622-02-M30.jpg'} alt='sd'></img></button>
            <p className='size1'>Brown Flannel Checks Shirt</p>
            <p className='size1'>INR 1,199</p>
            </div>
            <div className='card2'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered2(true)}
                    onMouseLeave={()=>setImgIsHovered2(false)}>
                        <img className='imgc1'src={imgIsHovered2 ?'https://www.snitch.co.in/cdn/shop/files/4MSS3622-01-M16_1bf4724e-5949-4ce2-b193-8140762e533d.jpg' : 'https://www.snitch.co.in/cdn/shop/files/4MSS3622-01-M201_a875f3de-9886-46bf-bec1-0dbca92cd674.jpg'} alt='sd'></img></button>
                <p className='size1'>Grey Flannel Checks Shirt</p>
            <p className='size1'>INR 1,199</p>
            </div>
            <div className='card3'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered3(true)}
                    onMouseLeave={()=>setImgIsHovered3(false)}><img className='imgc1'src={imgIsHovered3 ? 'https://www.snitch.co.in/cdn/shop/files/4MST2457-02-M18.jpg' : 'https://www.snitch.co.in/cdn/shop/files/4MST2457-02-M29.jpg'} alt='sd'></img></button>
                <p className='size1'>Black Textured Polo T-Shirt</p>
            <p className='size1'>INR 1,199</p>
                </div>
            <div className='card4'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered4(true)}
                    onMouseLeave={()=>setImgIsHovered4(false)}>
                        <img className='imgc1'src={imgIsHovered4 ? 'https://www.snitch.co.in/cdn/shop/files/4MST2457-01-M27_327a99ac-2b5e-4cf2-8bbc-1aa121fa55bb.jpg':'https://www.snitch.co.in/cdn/shop/files/4MST2457-01-M24_80fd95a1-7983-472a-8213-d13e7a9013df.jpg'} alt='sd'></img></button>
                <p className='size1'>Pink Textured Polo T-Shirt</p>
            <p className='size1'>INR 1,199</p>
            </div>
            <div className='card5'>
                <button className='cbutton'onMouseEnter={()=>setImgIsHovered5(true)}
                    onMouseLeave={()=>setImgIsHovered5(false)}>
                        <img className='imgc1'src={imgIsHovered5 ? 'https://www.snitch.co.in/cdn/shop/files/4MSS3513-09-M35.jpg' : 'https://www.snitch.co.in/cdn/shop/files/4MSS3513-09-M23copy.jpg'} alt='sd'></img></button>
                <p className='size1'>Burgundy Stripes Slim Fit Shirt</p>
            <p className='size1'>INR 1,199</p>
            </div>
        </div>
        <div className='contain'>
            <button className='b1'>VIEW ALL</button>
        </div>
        <div className='container2'>
            <p className='fasun'>SEASONAL FAVS <FaSun style={{backgroundColor:'gold'}} /></p>
            <div className='card12'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/2822ccd617ea287b66f68e19e742ee4a.webp' alt='sd'></img>
                <h4 className='size2'>JACKETS</h4>
                </button>
            </div>
            <div className='card22'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/433e0f059a7f339ed3cb95d21fb63d69.webp' alt='sd'></img>
                <p className='size2'>OVERSIZED TEES</p>
                </button>
            </div>
            <div className='card32'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/4MSR5082-07-3226.jpg' alt='sd'></img>
                <p className='size2'>TROUSERS</p>
                </button>
                </div>
            <div className='card42'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/54b5b750185779da70bd220a54f97de0_d6e75086-0aea-42d7-b52d-adb2f82ca473.webp' alt='sd'></img>
                <p className='size2'>CARGOS</p>
                </button>
            </div>
        </div>
        <div className='contain'>
            <button className='b12'>SHIRTS</button>
            <button className='b12'>T-SHIRTS</button>
            <button className='b12'>JEANS</button>
        </div>

        <div className='container2'>
            <div className='card13'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered6(true)}
                    onMouseLeave={()=>setImgIsHovered6(false)}>
                        <img className='imgc3'src={imgIsHovered6 ? 'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_10715.jpg':'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_1072.jpg'}  alt='sd'></img>
                <p className='size1'>Attrayant Blue Shirt</p>
            <p className='size1'>INR 1,199</p>
                </button>
            </div>
            <div className='card23'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered7(true)}
                    onMouseLeave={()=>setImgIsHovered7(false)}>
                        <img className='imgc3'src={imgIsHovered7 ? 'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_10620.jpg':'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_10618.jpg'} alt='sd'></img>
                <p className='size1'>Attrayant Beige Shirt</p>
            <p className='size1'>INR 1,199</p>
                </button>
            </div>
            <div className='card33'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered8(true)}
                    onMouseLeave={()=>setImgIsHovered8(false)}>
                        <img className='imgc3'src={imgIsHovered8 ? 'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_10660.jpg':'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_10652.jpg'} alt='sd'></img>
                <p className='size1'>Attrayant Yellow Shirt</p>
            <p className='size1'>INR 1,199</p>
                </button>
                </div>
            <div className='card43'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered9(true)}
                    onMouseLeave={()=>setImgIsHovered9(false)}><img className='imgc3'src={imgIsHovered9 ? 'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_9003.jpg':'https://www.snitch.co.in/cdn/shop/products/Snitch_July22nd22_9000.jpg'} alt='sd'></img>
                <p className='size1'>Black Strips Slim Fit Shirts</p>
            <p className='size1'>INR 1,199</p>
                </button>
            </div>
        </div>
        <div className='contain'>
            <button className='b1'>VIEW ALL</button>
        </div>

        <div className='container2'>
            <p className='fasun'>TRENDING NOW </p>
            <div className='card12'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/Untitled-4_81090b3b-1856-41a3-9975-e95a3e068bd1.jpg' alt='sd'></img>
                <h4 className='size2'>SWEATERS</h4>
                </button>
            </div>
            <div className='card22'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/ba8e046ce4c09d06165fab34bfc261da.jpg' alt='sd'></img>
                <p className='size2'>CHINOS</p>
                </button>
            </div>
            <div className='card32'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/4MSD2639-02-3222.jpg' alt='sd'></img>
                <p className='size2'>DENIMS</p>
                </button>
                </div>
            <div className='card42'>
                <button className='cbutton'><img className='imgc2'src='https://www.snitch.co.in/cdn/shop/files/4MSS3543-05-M34.jpg' alt='sd'></img>
                <p className='size2'>PRINTED SHIRTS</p>
                </button>
            </div>
        </div>
        <div className='contain'>
            <button className='b13'>SHORTS</button>
            <button className='b13'>TROUSERS</button>
        </div>
        
        <div className='container2'>
            <div className='card13'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered10(true)}
                 onMouseLeave={()=>setImgIsHovered10(false)}>
                    <img className='imgc3'src={imgIsHovered10 ? 'https://www.snitch.co.in/cdn/shop/files/8ff7ef6eb0b5c3a2b0877033fb21665c.jpg':'https://www.snitch.co.in/cdn/shop/files/ce341b67eb9e2d084af5692fdf67f388.jpg'} alt='sd'></img>
                <p className='size1'>Green Plain Linen Regular Fit Shorts</p>
            <p className='size1'>INR 1,499</p>
                </button>
            </div>
            <div className='card23'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered11(true)}
                    onMouseLeave={()=>setImgIsHovered11(false)}><img className='imgc3'src={imgIsHovered11 ? 'https://www.snitch.co.in/cdn/shop/files/3a00a2edc432f083df72cbd6bcf21825.jpg':'https://www.snitch.co.in/cdn/shop/files/cdba597d874d9e576e2c9704b58c3017.jpg'} alt='sd'></img>
                <p className='size1'>Light Grey Plain Linen Regular Fit Shorts</p>
            <p className='size1'>INR 1,499</p>
                </button>
            </div>
            <div className='card33'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered12(true)} 
                onMouseLeave={()=>setImgIsHovered12(false)}>
                    <img className='imgc3'src={imgIsHovered12 ?  'https://www.snitch.co.in/cdn/shop/files/875c92421610016d634ed08de3689197.jpg':'https://www.snitch.co.in/cdn/shop/files/9ac91d6f5112e3971c8bd25752774d08.jpg' } alt='sd'></img>
                <p className='size1'>Light Blue Plain Linen Regular Fit Shorts</p>
            <p className='size1'>INR 1,499</p>
                </button>
                </div>
            <div className='card43'>
                <button className='cbutton' onMouseEnter={()=>setImgIsHovered13(true)}
                onMouseLeave={()=>setImgIsHovered13(false)} ><img className='imgc3'src={ imgIsHovered13 ? 'https://www.snitch.co.in/cdn/shop/files/4MSH7027-051.jpg' : 'https://www.snitch.co.in/cdn/shop/files/4MSH7027-0543.jpg'} alt='sd'></img>
                <p className='size1'>White Plain Linen Regular Fit Shorts</p>
            <p className='size1'>INR 1,499</p>
                </button>
            </div>
        </div>
        <div className='contain'>
            <button className='b1'>VIEW ALL</button>
        </div>
        <div className='fix'>
        <button className='sidefixb'><FaGift />Rewards</button>
        </div>
        </div>
        </>
    )
}
export default Products;