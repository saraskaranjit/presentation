import React from "react";

interface LoginProps {
  onLogin: () => void;
  onToGoogle: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onToGoogle }) => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col items-center justify-between p-4 bg-white text-black">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:space-x-32 w-full max-w-6xl">
        <div className="text-center lg:text-left max-w-lg mb-12 lg:mb-0">
          <h1 className="text-[#1877f2] font-bold text-6xl mb-4">facebook</h1>
          <p className="text-2xl font-medium leading-tight text-gray-800">
            Connect with your data (and everyone else's) on Facebook.
          </p>
        </div>

        <div className="bg-white p-4 shadow-xl rounded-lg w-full max-w-md flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-lg bg-white"
            defaultValue="privacy_presenters@gmail.com"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-lg bg-white"
            defaultValue="1234567890"
          />
          <button
            onClick={onLogin}
            className="bg-[#1877f2] text-white font-bold text-xl py-3 rounded-md hover:bg-[#166fe5] transition duration-200"
          >
            Log In
          </button>
          <a
            href="#"
            className="text-[#1877f2] text-sm text-center hover:underline"
          >
            Forgot password?
          </a>
          <hr />
          <div className="flex justify-center pt-4">
            <button
              onClick={onLogin}
              className="bg-[#42b72a] text-white font-bold text-lg px-4 py-3 rounded-md hover:bg-[#36a420] transition duration-200"
            >
              Create new account
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl border-t border-gray-300 pt-8 pb-12 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-4">
          Are you looking for something else?
        </p>
        <button
          onClick={onToGoogle}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition group"
        >
          <span className="font-semibold border-b border-transparent group-hover:border-blue-600">
            Search for "presentation" on Google
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
