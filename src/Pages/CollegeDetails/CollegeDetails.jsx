

import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
    const college = useLoaderData();
    const {
        collegePic,
        collegeName,
        admissionDates,
        events,
        researchHistory,
        sports,
        admissionProcess,
        eventsDetails,
        researchWorks,
    } = college;

    return (
        <div className="pt-20">
            <h2 className="text-3xl font-bold text-center">
                The Details of <span className="text-sky-500">{collegeName}</span>
            </h2>
            <hr className="mt-4 h-2 w-96 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded" />
            <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-full w-full">
                    <img
                        className="w-full h-full object-cover"
                        src={collegePic}
                        alt="College Image"
                    />
                </div>
                <div className="p-4 md:p-6">
                    <h3 className="text-2xl font-bold mb-4">{collegeName}</h3>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Admission Dates:</span>{" "}
                        {admissionDates}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Events:</span> {events}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Research History:</span>{" "}
                        {researchHistory}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Sports:</span> {sports}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Admission Process:</span>{" "}
                        {admissionProcess}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Events Details:</span>{" "}
                        {eventsDetails}
                    </p>
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        <span className="text-xl font-semibold">Research Works:</span>{" "}
                        {researchWorks}
                    </p>
                </div>
                <div className="mb-5 mt-5 text-center">
                    <Link to={-1}>
                        <button className="bg-gradient-to-r mt-10 from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full shadow-md font-semibold transform hover:scale-110 transition duration-300 ease-in-out">
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
