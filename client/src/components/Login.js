import React from 'react';
import Metadata from './Metadata';

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
      <Metadata title="Login" />
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
