import { useEffect, useState } from "react";
import CollegeItem from "./CollegeItem";

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('colleges.json')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])


    return (
        <div className="mt-10">
            <h2 className="font-bold text-center text-3xl">Show Top Colleges</h2>
            <hr className="mt-4 h-2 w-72 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-5 mt-5">
                {
                    colleges.map(item => <CollegeItem key={item.id} item={item}></CollegeItem>)
                }
            </div>
            
        </div>
    );
};

export default Colleges;