import { Link, useNavigate } from "react-router";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";
import supabase from "../services/supabase";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

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
      setError(t("errors.password"));
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

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        {" "}
        <span className="my-blue">{t("contactUs.register")}</span>
      </h1>

      <div className="flex items-center justify-center mb-10">
        <div className="flex flex-col px-6 py-8 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700">
          <h3 className="dark:text-white text-lg md:text-xl xl:text-3xl mt-4 font-medium text-center mb-2">
            {t("contactUs.register")}
          </h3>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleRegister} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">{t("contactUs.enterYourName")}</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border outline-none border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">{t("contactUs.enterYourEmail")}</label>
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
                <label className="dark:text-white text-sm">{t("contactUs.password")}</label>
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
                {t("contactUs.password")}
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
              {t("contactUs.createacc")}
            </button>

            <p className="text-xs md:text-sm xl:text-md dark:text-white mb-4">
            {t("contactUs.alreadyacc")} {" "}
              <Link to="/login" className="my-blue underline">
              {t("contactUs.login")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
