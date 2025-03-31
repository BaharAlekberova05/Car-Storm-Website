// import { Link } from "react-router";
// import { HiOutlineEye } from "react-icons/hi";
// import { HiOutlineEyeOff } from "react-icons/hi";
// import { useState } from "react";

// const Register = () => {
//   const [showPass, setShowPass] = useState(false);
//   return (
//     <div className="container">
//       <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
//         Login / <span className="my-blue">Register</span>
//       </h1>

//       <div className="flex items-center justify-center mb-10">
//         <div className="flex flex-col px-6 py-8 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700">
//           <h3 className="dark:text-white text-lg md:text-xl xl:text-3xl mt-4 font-medium text-center mb-2">
//             Register
//           </h3>

//           <form action="#" className="flex flex-col space-y-4">
//             <div className="flex flex-col space-y-2">
//               <label className="dark:text-white text-sm">User name</label>
//               <input
//                 type="text"
//                 className="border outline-none border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
//               />
//             </div>

//             <div className="flex flex-col space-y-2">
//               <label className="dark:text-white text-sm">Email adress</label>
//               <input
//                 type="email"
//                 className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
//               />
//             </div>

//             <div className="flex flex-col space-y-2">
//               <div className="flex items-center justify-between">
//                 <label className="dark:text-white text-sm">Password</label>
//                 <button onClick={() => setShowPass(!showPass)}>
//                   {showPass ? (
//                     <HiOutlineEye className="dark:text-white cursor-pointer" />
//                   ) : (
//                     <HiOutlineEyeOff className="dark:text-white cursor-pointer" />
//                   )}
//                 </button>
//               </div>
//               <input
//                 type={showPass ? "text" : "password"}
//                 className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
//               />
//             </div>

//             <div className="flex flex-col space-y-2">
//               <div className="flex items-center justify-between">
//                 <label className="dark:text-white text-sm">Repeat Password</label>
//                 <button onClick={() => setShowPass(!showPass)}>
//                   {showPass ? (
//                     <HiOutlineEye className="dark:text-white cursor-pointer" />
//                   ) : (
//                     <HiOutlineEyeOff className="dark:text-white cursor-pointer" />
//                   )}
//                 </button>
//               </div>
//               <input
//                 type={showPass ? "text" : "password"}
//                 className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-my-blue text-white rounded-lg py-1 cursor-pointer text-md font-semibold"
//             >
//               Create an accout
//             </button>

//             <p className="text-xs md:text-sm xl:text-md dark:text-white mb-4">
//               Already have an account?{" "}
//               <Link to={"/login"} className="my-blue underline">
//                 Log in
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { Link, useNavigate } from "react-router";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";
import supabase from "../services/supabase";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username, 
          },
        },
      });

      if (error) throw error;

      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        Login / <span className="my-blue">Register</span>
      </h1>

      <div className="flex items-center justify-center mb-10">
        <div className="flex flex-col px-6 py-8 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700">
          <h3 className="dark:text-white text-lg md:text-xl xl:text-3xl mt-4 font-medium text-center mb-2">
            Register
          </h3>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleRegister} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">User name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border outline-none border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="dark:text-white text-sm">Password</label>
                <button onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <HiOutlineEye className="dark:text-white cursor-pointer" />
                  ) : (
                    <HiOutlineEyeOff className="dark:text-white cursor-pointer" />
                  )}
                </button>
              </div>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="dark:text-white text-sm">
                  Repeat Password
                </label>
                <button onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <HiOutlineEye className="dark:text-white cursor-pointer" />
                  ) : (
                    <HiOutlineEyeOff className="dark:text-white cursor-pointer" />
                  )}
                </button>
              </div>
              <input
                type={showPass ? "text" : "password"}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-my-blue text-white rounded-lg py-1 cursor-pointer text-md font-semibold"
            >
              Create an account
            </button>

            <p className="text-xs md:text-sm xl:text-md dark:text-white mb-4">
              Already have an account?{" "}
              <Link to="/login" className="my-blue underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
