import Lottie from 'react-lottie';
import animationData from '../../../public/login.json'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const { signUser } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })

    }

    

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-1/2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <div className='mt-10'>
                        <h2 className='text-3xl text-center font-bold mb-5'>Login Here</h2>
                        <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center mb-3'>
                    <p>New Here? <Link to='/signup'>Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;