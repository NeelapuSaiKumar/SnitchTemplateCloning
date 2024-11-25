import './Carousal1.css';
import { useState } from 'react';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs';
function Carousal1({data}){
    const [slide,setSlide]=useState(0);

    const nextslide=()=>{
        setSlide(slide+1);
    };
    const prevslide=()=>{
        setSlide(slide-1);
    };
    
    return(
        <div className="carousal">
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevslide}/>
            {data.map((item,idx)=>{
              return  <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextslide}/>

            <span className='indicators'>
                {
                    data.map((_,idx)=>{
                        return <button key={idx} onClick={null} className={slide=== idx ? "indicator":"indicator indicator-inactive"}></button>
                    })
                }
            </span>
        </div>
    );
}
export default Carousal1;