// import  { useState } from 'react';

// const Navbar = () => {
  
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-white via-blue-500 to-blue-800 p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <img src="https://i.ibb.co/YP1XhQm/images-removebg-preview.png" alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
//           <h1 className="text-black font-bold text-2xl">Campus Zone</h1>
//         </div>
//         {/* Mobile menu button */}
//         <button
//           className="text-white md:hidden focus:outline-none relative z-20 transition-transform"
//           onClick={toggleMobileMenu}
//         >
//           <svg
//             className={`h-6 w-6 transform ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//         {/* Desktop menu */}
//         <div className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//           <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
//           <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:rotate-3">Colleges</a>
//           <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:-translate-x-2 hover:translate-y-2">Admission</a>
//           <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:skew-y-3">My Colleges</a>
//         </div>
//       </div>
//       {/* Mobile menu */}
//       <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//         <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
//         <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:rotate-3">Colleges</a>
//         <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:-translate-x-2 hover:translate-y-2">Admission</a>
//         <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:skew-y-3">MY Colleges</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-white via-blue-500 to-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/YP1XhQm/images-removebg-preview.png"
            alt="Logo"
            className="h-10 w-10 mr-2 rounded-full transition-transform transform hover:scale-110 animate-pulse"
          />
          <h1 className="text-black font-bold text-2xl">Campus Zone</h1>
        </div>
        {/* Mobile menu button */}
        <button
          className="text-white md:hidden focus:outline-none relative z-20 transition-transform"
          onClick={toggleMobileMenu}
        >
          <svg
            className={`h-6 w-6 transform ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {/* Desktop menu */}
        <div className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
          <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:rotate-3">Colleges</a>
          <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:-translate-x-2 hover:translate-y-2">Admission</a>
          <a href="#" className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:skew-y-3">My Colleges</a>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
        <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:rotate-3">Colleges</a>
        <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:-translate-x-2 hover:translate-y-2">Admission</a>
        <a href="#" className="block text-black hover:text-blue-300 p-2 transition duration-300 ease-in-out transform hover:skew-y-3">My Colleges</a>
      </div>
    </nav>
  );
};

export default Navbar;
