
import { Link } from "react-router-dom";

const AllCollege = ({ college }) => {
    const {
        collegeName,
        collegePic,
        admissionDates,
        events,
        researchHistory,
        sports,
    } = college;
    return (
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img className="w-full h-56 object-cover" src={collegePic} alt="College Image" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-2xl font-extrabold mb-2">{collegeName}</h3>
                <p className="text-white text-sm mb-1"><span className="text-xl">Admission Dates:</span> {admissionDates}</p>
                <p className="text-white text-sm mb-1"><span className="text-xl">Events:</span> {events}</p>
                <p className="text-white text-sm mb-1"><span className="text-xl">Research History:</span> {researchHistory}</p>
                <p className="text-white text-sm mb-1"><span className="text-xl">Sports:</span> {sports}</p>
                <Link to={`/collegespage/${college.id}`}>
                    <button className="block py-2 px-4 mt-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllCollege;







// import { Link } from "react-router-dom";

// const AllCollege = ({ college }) => {
//     const {
//         collegeName,
//         collegePic,
//         admissionDates,
//         events,
//         researchHistory,
//         sports,
//     } = college;
//     return (
//         <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
//             <img className="w-full h-56 object-cover" src={collegePic} alt="College Image" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
//             <div className="absolute bottom-0 left-0 p-4">
//                 <h3 className="text-white text-2xl font-extrabold mb-2">{collegeName}</h3>
//                 <p className="text-white text-sm mb-1"><span className="text-xl">Admission Dates:</span> {admissionDates}</p>
//                 <p className="text-white text-sm mb-1"><span className="text-xl">Events:</span> {events}</p>
//                 <p className="text-white text-sm mb-1"><span className="text-xl">Research History:</span> {researchHistory}</p>
//                 <p className="text-white text-sm mb-1"><span className="text-xl">Sports:</span> {sports}</p>
//                 <Link to={`/collegespage/${collegespage.id}`}>
//                     <button className="block py-2 px-4 mt-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                         Details
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default AllCollege;