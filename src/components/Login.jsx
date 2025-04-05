import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router";
import supabase from "../services/supabase";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const { user } = data;

      if (!user) {
        setError(t("errors.user"));
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));

      if (user.user_metadata?.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(t("errors.login"));
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-6 text-center">
        <span className="my-blue">{t("contactUs.login")}</span>
      </h1>

      <div className="flex items-center justify-center mb-10">
        <div className="flex flex-col px-6 py-10 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700">
          <h3 className="dark:text-white text-lg md:text-xl xl:text-3xl mb-2 font-medium text-center">
            {t("contactUs.login")}
          </h3>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="dark:text-white text-sm">
                {t("contactUs.enterYourEmail")}
              </label>
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
                <label className="dark:text-white text-sm">
                  {t("contactUs.password")}
                </label>
                <div onClick={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <HiOutlineEye className="dark:text-white cursor-pointer" />
                  ) : (
                    <HiOutlineEyeOff className="dark:text-white cursor-pointer" />
                  )}
                </div>
              </div>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none border border-white bg-white text-black dark:bg-[#121212] dark:text-white rounded-md py-1 px-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-my-blue text-white rounded-lg py-1 cursor-pointer text-md font-semibold"
              disabled={loading}
            >
              {loading ? t("loading") : t("contactUs.login")}
            </button>

            <p className="text-xs md:text-sm xl:text-md dark:text-white mb-4">
              {t("contactUs.dontacc")}{" "}
              <Link to="/register" className="my-blue underline">
                {t("contactUs.register")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
