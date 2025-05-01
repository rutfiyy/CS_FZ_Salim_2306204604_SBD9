import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { signUpUser } from "../actions/User.actions";

export default function SignUp() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['isLoggedIn']);

  useEffect(() => {
    if (cookies.isLoggedIn) {
      navigate('');
    }
  }, [cookies.isLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const change = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const submitData = async (event) => {
    event.preventDefault();
    
    try {
      const response = await signUpUser(formData);

      if (response.success && response.data) {
        setErrorMessage('');
        navigate("/");
      } else {
        setErrorMessage(response.data?.message || "Failed to register account! Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex justify-center items-center flex-grow pt-16">
        <div className="bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Register Form</h2>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center font-medium">
              {errorMessage}
            </div>
          )}
          <form onSubmit={submitData}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                type="text"
                onChange={change}
                value={formData.email}
                placeholder="Email"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                type="text"
                onChange={change}
                value={formData.name}
                placeholder="Name"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                onChange={change}
                value={formData.password}
                placeholder="Password"
                required
                className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-400">Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline mt-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}