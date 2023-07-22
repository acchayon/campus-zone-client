import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center">
            <LeftContent></LeftContent>
            <RightContent></RightContent>
        </div>
    );
};

export default Banner;