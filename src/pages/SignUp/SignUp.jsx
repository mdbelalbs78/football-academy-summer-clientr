import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Google from "../Shared/Google/Google";


const SignUp = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data.name)
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        const saveUser = {name: data.name, email: data.email }
        fetch('http://localhost:5000/users',{
          method: "POST",
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => { 
          if(data.insertedId){
            console.log('user profile update');
            reset();
            Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'User Create Successfully',
             showConfirmButton: false,
             timer: 1500
           })
           navigate('/')
          }
        })    
      })
      .catch(error => console.log(error))
    })
    
  };

 

    return (
    <>
    <Helmet>
         <title>Football Academy | Sign Up</title>
    </Helmet>
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card flex-shrink-0 p-10 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span>name is required</span>}

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="photo" {...register("photoURL", { required: true })}  placeholder="Photo Url" className="input input-bordered" />
          {errors.photoUrl && <span>Photo Url  is required</span>}

        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" {...register("email" ,{ required: true })} placeholder="email" className="input input-bordered" />
          {errors.email && <span>Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" {...register("password" ,{ required: true,
          minLength: 6,
          maxLength: 18,
          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
               })} placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'minLength' && <p role="alert">Password must be 6 characters</p>}
          {errors.password?.type === 'maxLength' && <p role="alert">Password must less than 20 characters</p>}
          {errors.password?.type === 'pattern' && <p role="alert">Password must have 1 upper case 1 lower case 1 number and 1 special characters </p>}
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
     
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirm-password" placeholder="confirm password" className="input input-bordered" />
        </div> */}


<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='confirmPassword'>
						Confirm Password
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
							errors.confirmPassword ? 'border-red-500' : ''
						}`}
						type='password'
						placeholder='Confirm Password'
						{...register('confirmPassword', {
							required: 'Please confirm your password',
							validate: (value) =>
								value === watch('password') || 'Passwords do not match',
						})}
					/>
					{errors.confirmPassword && (
						<p className='text-red-500 text-xs mt-1'>
							{errors.confirmPassword.message}
						</p>
					)}
          </div>

        
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='text-center font-semibold'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
      <Google></Google>
    </div>
  </div>
</div>
    </>
    );
};

export default SignUp;