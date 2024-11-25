import './Carousal.css';

// function Carousal({data}) {
//     console.log(data);
//     return (
//         <>
//         <div className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <div className="d-flex justify-content-center">
//                         <img className="side" src='https://www.snitch.co.in/cdn/shop/files/3_Shirts.jpg' alt='slide 1' />
//                         <img className="side" src='https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711966172_1876307.jpg' alt='slide 1' />
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <div className="d-flex justify-content-center">
//                         <img className="side" src='https://www.snitch.co.in/cdn/shop/files/3_Shirts.jpg' alt='slide 2' />
//                         <img className="side" src='https://www.snitch.co.in/cdn/shop/files/3_Shirts.jpg' alt='slide 2' />
//                     </div>
//                 </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//         <div className='contain'>
//             <button className='b'>NEW DROPS</button>
//             <button className='c'>MOST TRENDING</button>
//         </div>
//         </>
//     );
// }

// export default Carousal;


function Carousel() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.snitch.co.in/cdn/shop/files/Jackets_optional.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.snitch.co.in/cdn/shop/files/3_Shirts.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.snitch.co.in/cdn/shop/files/1_MobileBanner_1080x1350_577f9192-58b9-4c5a-ba6f-4d7ab1308eb5_400x.jpg" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;