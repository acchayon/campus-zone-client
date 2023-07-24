import { useEffect, useState } from "react";
import AllCollege from "./AllCollege";

const CollegesPage = () => {
    const [allColleges, setAllColleges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/college")
        .then(res => res.json())
        .then(data => {
            setAllColleges(data)
        })
    },[])


    return (
        <div className="pt-20">
            <h2 className="text-3xl font-bold text-center">See All Colleges Here</h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-5 mt-5">
                {
                    allColleges.map((college) => <AllCollege key={college.id} college={college}></AllCollege>)
                }
            </div>
        </div>
    );
};

export default CollegesPage;