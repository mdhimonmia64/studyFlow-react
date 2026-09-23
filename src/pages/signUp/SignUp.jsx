import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { user, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch(
        "/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        },
      );
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        setUser(data.data?.user);
      } else {
        toast.error(data.message || "Something went wrong!");
      }
      form.reset();
      navigate("/")
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-[#0e7c66] text-2xl shadow-lg mb-4">
            <LuNotebookPen size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Join StudyFlow</h1>

          <p className="text-gray-500 mt-2">
            Create your account and start learning smarter
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Fill in the information below to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                required
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input
                required
                id="terms"
                type="checkbox"
                className="w-4 h-4 mt-1 accent-blue-600 cursor-pointer"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-5 cursor-pointer"
              >
                I agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-200 flex-1"></div>

            <span className="text-sm text-gray-400">OR</span>

            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-7">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} StudyFlow. Learn smarter, grow faster.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
