
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../../public/sign.json';

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };

  const handleReset = () => {
    const form = document.getElementById('signup-form');
    form.reset();
  };

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
          <div className="mt-10">
            <h2 className="text-3xl text-center font-bold mb-5">Registration Here</h2>
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form id="signup-form" onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Register" />
              <button type="button" className="btn " onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
          <div className="text-center mb-3">
            <p>
              Already have an account? <Link to="/login">Go To Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
