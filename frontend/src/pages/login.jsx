import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { loginUser } from "../actions/User.actions";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookies] = useCookies(["user_id", "email", "isLoggedIn", "username"]);

  const [formData, setFormData] = useState({
    email: cookies.email || "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (cookies.isLoggedIn && location.pathname !== "/login") {
      navigate("/");
    }
  }, [cookies.isLoggedIn, location.pathname, navigate]);

  const change = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(formData);

      if (response.data.success === true) {
        setErrorMessage("");
        setCookies("user_id", response.data._id, { path: "/" });
        setCookies("email", response.data.email, { path: "/" });
        setCookies("username", response.data.username, { path: "/" }); // Set the username cookie
        setCookies("isLoggedIn", true, { path: "/" });
        navigate("/");
      } else {
        setErrorMessage(response.data?.message || "Failed to login! Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={submitData} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center font-medium">
            {errorMessage}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={change}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={change}
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mb-6"
        >
          Login
        </button>
        <div className="text-center">
          <p className="text-gray-400">Don't have an account?</p>
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline mt-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}