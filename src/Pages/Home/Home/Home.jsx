import About from "../About/About";
import Banner from "../Banner/Banner";
import Colleges from "../Colleges/Colleges";
import GalleryPart from "../GalleryPart/GalleryPart";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Colleges></Colleges>
           <About></About>
           <GalleryPart></GalleryPart>
        </div>
    );
};

export default Home;