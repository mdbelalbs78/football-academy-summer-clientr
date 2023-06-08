import { useContext, useState } from 'react';
import img from '../../assets/fo1.jpg'
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Google from '../Shared/Google/Google';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const [check, setCheck] = useState()

  const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        navigate(from, {replace: true});
    }

    return (
        <>
      <Helmet>
         <title>Football Academy | Login</title>
    </Helmet>
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=" md:w-1/2 lg:text-left">           
            <img className='mx-5' src={img} alt="" />
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold">Login now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={check? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered mb-2" />
                <span><input onChange={() => setCheck(!check)} type="checkbox"  name="" id="" /></span>
              </div>
              
              <div className="form-control mt-6">              
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center font-semibold'><small>Now Here? <Link to='/signup'>Please sign up</Link></small></p>
           <Google></Google>
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;