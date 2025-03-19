import { useRef, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const admin = {
    email: "baharalekberova05@gmail.com",
    password: "B1-212+B1-222",
  };

  const accessToAdmin = () => {
    if (
      emailRef.current.value === admin.email &&
      passRef.current.value === admin.password
    ) {
      navigate("/dashboard");
    } else {
      alert("calismadi");
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">Login</span> / Register
      </h1>

      <div className="flex items-center justify-center mb-10">
        <div className="flex flex-col px-6 py-10 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700">
          <h3 className="dark:text-white text-lg md:text-xl xl:text-3xl mb-2 font-medium text-center">
            Login
          </h3>

          <form action="#" className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">Email adress</label>
              <input
                type="email"
                ref={emailRef}
                className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3 "
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="dark:text-white text-sm">Password</label>
                <div onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <HiOutlineEye className="dark:text-white cursor-pointer" />
                  ) : (
                    <HiOutlineEyeOff className="dark:text-white cursor-pointer" />
                  )}
                </div>
              </div>
              <input
                ref={passRef}
                type={showPass ? "text" : "password"}
                className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
              />
            </div>

            {/* <Link to={"/dashboard"}></Link> */}

            <button
              className="w-full bg-my-blue text-white rounded-lg py-1 cursor-pointer text-md font-semibold"
              onClick={accessToAdmin}
            >
              Login
            </button>

            <p className="text-xs md:text-sm xl:text-md dark:text-white mb-4">
              Don't have an account?{" "}
              <Link to={"/register"} className="my-blue underline">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
