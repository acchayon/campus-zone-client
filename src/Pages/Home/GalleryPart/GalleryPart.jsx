// import g1 from '../../../assets/g1.jpg'
// import g2 from '../../../assets/g2.jpg'
// import g3 from '../../../assets/g3.jfif'
// import g4 from '../../../assets/g4.webp'
// import g5 from '../../../assets/g5.jfif'
// import g6 from '../../../assets/g6.jfif'
// import g7 from '../../../assets/g7.jfif'
// import g8 from '../../../assets/g8.jfif'
// import g9 from '../../../assets/g9.jfif'

// const GalleryPart = () => {
//     return (
//         <div className='mt-5'>
//             <div>
//                 <h2 className='text-3xl font-bold text-center'>Celebration Of Graduation</h2>
//                 <hr className="mt-4 h-2 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded" />
//             </div>
//             <div className='lg:px-28 md:px-28 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
//                 <div> <img className='h-80 w-full' src={g2} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g1} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g3} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g4} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g5} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g6} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g7} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g8} alt="" /></div>
//                 <div> <img className='h-80 w-full' src={g9} alt="" /></div>
//             </div>
//         </div>
//     );
// };

// export default GalleryPart;




import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import g1 from '../../../assets/g1.jpg'
import g2 from '../../../assets/g2.jpg'
import g3 from '../../../assets/g10.jfif'
import g4 from '../../../assets/g4.webp'
import g5 from '../../../assets/g5.jfif'
import g6 from '../../../assets/g6.jfif'
import g7 from '../../../assets/g7.jfif'
import g8 from '../../../assets/g8.jfif'
import g9 from '../../../assets/g9.jfif'

const GalleryPart = () => {
  // Initialize AOS for this component
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className='mt-5'>
      <div>
        <h2 className='text-3xl font-bold text-center'>Celebration Of Graduation</h2>
        <hr className="mt-4 h-2 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded" />
      </div>
      <div className='lg:px-28 md:px-28 p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
        <div data-aos='fade-up'>
          <img className='h-80 w-full' src={g2} alt="" />
        </div>
        <div data-aos='fade-right'>
          <img className='h-80 w-full' src={g1} alt="" />
        </div>
        <div data-aos='fade-left'>
          <img className='h-80 w-full' src={g3} alt="" />
        </div>
        <div data-aos='fade-up'>
          <img className='h-80 w-full' src={g4} alt="" />
        </div>
        <div data-aos='zoom-in'>
          <img className='h-80 w-full' src={g5} alt="" />
        </div>
        <div data-aos='flip-left'>
          <img className='h-80 w-full' src={g6} alt="" />
        </div>
        <div data-aos='flip-right'>
          <img className='h-80 w-full' src={g7} alt="" />
        </div>
        <div data-aos='fade-up'>
          <img className='h-80 w-full' src={g8} alt="" />
        </div>
        <div data-aos='fade-up'>
          <img className='h-80 w-full' src={g9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPart;
