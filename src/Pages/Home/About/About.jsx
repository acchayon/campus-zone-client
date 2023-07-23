import Lottie from 'react-lottie';
import animationData from '../../../../public/animation_lkexbhhm.json'


const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <div className="mt-10 mb-10">
                <h2 className="text-3xl font-bold text-center">About US</h2>
                <hr className="mt-4 h-2 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded" />
                <div className='mt-2'>
                    <Lottie options={defaultOptions} height={200} width={200} />
                </div>

                <p className="text-center mt-2">
                    Change higher education financing your future, you can rely
                    <br /> on the our team to deliver a personal environment tailored specifically for you
                </p>
            </div>


            {/* cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="p-6 transform hover:-translate-y-1 hover:scale-105">
                    <img
                        src="https://i.ibb.co/hHPbFF6/5.jpg"
                        alt="Image"
                        className="rounded-lg w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-2xl text-center font-bold mb-2">New skills & knowledge</h3>
                    <p className="text-base text-center mb-4">
                        The Business Remakri have become a go to resource for many national journalists, read their latest contributions here
                    </p>
                </div>

                <div className="p-6 transform hover:-translate-y-1 hover:scale-105">
                    <img
                        src="https://i.ibb.co/Wk7Lf0T/6.jpg"
                        alt="Image"
                        className="rounded-lg w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-2xl text-center font-bold mb-2">Improving the teaching</h3>
                    <p className="text-base mb-4 text-center">
                        The Business Remakri have become a go to resource for many national journalists, read their latest contributions here
                    </p>
                </div>


                <div className="p-6 transform hover:-translate-y-1 hover:scale-105">
                    <img
                        src="https://i.ibb.co/mFvzBg4/3.jpg"
                        alt="Image"
                        className="rounded-lg w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-2xl text-center font-bold mb-2">Lessons for greening</h3>
                    <p className="text-base text-center mb-4">
                        The Business Remakri have become a go to resource for many national journalists, read their latest contributions here
                    </p>

                </div>
            </div>
        </>
    );
};

export default About;
