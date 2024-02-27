/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data); 
    // reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-2 text-center text-3xl  font-extrabold text-gray-900">Login</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                {...register('email', { required: 'Email is required' })}
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{(errors.email as any).message}</p>}
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                {...register('password', { required: 'Password is required' })}
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
              {errors.password && <p className="mt-1 text-red-500 text-sm">{(errors.password as any).message}</p>}
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 7.293a1 1 0 011.414 1.414L4.414 9H11a1 1 0 110 2H4.414l.293.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2zM15 4a1 1 0 011 1v10a1 1 0 01-1 1h-7a1 1 0 110-2h7V5a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </span>
              Login
            </button>
          </div>
        </form>
        <div>
          <p>New user? <Link className='font-bold' to={'/register'}>Create Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
