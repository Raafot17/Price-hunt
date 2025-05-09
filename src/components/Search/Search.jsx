import React from 'react'
import Navbar from '../Navbar/Navbar'
import img from '/src/assets/img.png'
import img1 from '/src/assets/im1.png'
import img2 from '/src/assets/im2.png'
import img3 from '/src/assets/im3.png'
import img4 from '/src/assets/im4.png'
import img5 from '/src/assets/im5.png'
import img6 from '/src/assets/im6.png'
import img7 from '/src/assets/im7.png'
import img8 from '/src/assets/im8.png'
import img9 from '/src/assets/im9.png'
import img10 from '/src/assets/im10.png'
import { Link } from 'react-router-dom'


export default function Search() {
  return (
    <>
     <>
     
      <div>
      <section
        className="w-full h-[334px]   text-white "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
     <Navbar />
      </section>

   <h2 className='text-center text-2xl my-5'>Suggestion</h2>
  <Link to="/RecentProduct">
   <button className='px-5 py-1 font-serif border  rounded-lg'>Manual</button>
  </Link>
  
      <div className="container text-center  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-28 gap-4 p-4">
      {/* الكارت الأول - تقدر تكرره أو تخليه map من array */}
  <div className="w-[230px] mx-auto rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img1}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">ZARA, Cotton, New, Shirt, Casual,Black</p>
      <h2 className="text-lg font-semibold mb-1">55$</h2>
   
    </div>
  </div>
 
  <div className="w-[230px] mx-auto rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img2}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">ZARA, Cotton, New, dress, Casual,Blue</p>
      <h2 className="text-lg font-semibold mb-1">80$</h2>
   
    </div>
  </div>
 
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img3}
      alt=" جاكت قطني "
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">ZARA, Cotton, New, jacket, Casual,Red</p>
      <h2 className="text-lg font-semibold mb-1">80$</h2>
   
    </div>
  </div>
 
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img4}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">H&M, Cotton, Used,Shirt,Casual,White</p>
      <h2 className="text-lg font-semibold mb-1">20$</h2>
   
    </div>
  </div>
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img5}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">Nike, leather, Used,shoes,Casual,Black</p>
      <h2 className="text-lg font-semibold mb-1">15$</h2>
   
    </div>
  </div>
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img6}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">H&m, Cotton, New,Shirt,Casual,White</p>
      <h2 className="text-lg font-semibold mb-1">40$</h2>
   
    </div>
  </div>
 
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img7}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">H&m, polyister, New,jacket,Casual,Yellow</p>
      <h2 className="text-lg font-semibold mb-1">50$</h2>
   
    </div>
  </div>
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img8}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">H&m, polyister, New,pants
      ,Casual,White</p>
      <h2 className="text-lg font-semibold mb-1">33$</h2>
   
    </div>
  </div>
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img9}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">H&m, lezer, New,jacket
      ,Casual,Brown</p>
      <h2 className="text-lg font-semibold mb-1">60$</h2>
   
    </div>
  </div>
 
 
  <div className="w-[230px] mx-auto  rounded-[5px] overflow-hidden  bg-white">
    <img
      src={img10}
      alt="تيشيرت قطني"
      className="w-full h-[350px] object-cover"
    />
    <div className="p-3">
      <p className="text-sm text-gray-600">Zara, lezer, New,jacket
      ,Casual,Brown</p>
      <h2 className="text-lg font-semibold mb-1">62$</h2>
   
    </div>
  </div>
 
 

  {/* كروت تانية ممكن تتكرر هنا */}
</div>

      </div>
     
    </>
    
    </>
  )
}
