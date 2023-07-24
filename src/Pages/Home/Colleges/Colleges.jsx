
import { useEffect, useState } from "react";
import CollegeItem from "./CollegeItem";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://campus-zone-server-acchayon.vercel.app/college")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const displayedColleges = colleges.slice(0, 3);

  const filteredColleges = colleges.filter((college) =>
    college.collegeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 bg-white rounded-lg shadow-md p-6">
      <h2 className="font-bold text-center text-3xl">Show Top Colleges</h2>
      <hr className="mt-4 h-2 w-72 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded" />

      <div className="max-w-lg mx-auto mt-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Colleges..."
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full border border-gray-300"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-5 mt-5">
        {filteredColleges.slice(0, 3).map((item) => (
          <CollegeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
