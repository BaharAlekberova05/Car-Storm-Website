import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const InputField = ({ label, type, register, name, placeholder, error }) => (
  <div className="w-full">
    <input
      {...register(name, { required: placeholder })}
      type={type}
      className="border border-gray-200 bg-white dark:bg-[#121212] w-full px-4 py-2 rounded-md dark:text-white placeholder:dark:text-white"
      placeholder={placeholder}
    />
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
);

const TextAreaField = ({ label, register, name, placeholder, error }) => (
  <div className="w-full">
    <textarea
      {...register(name, { required: placeholder })}
      className="w-full h-[200px] border border-gray-200 bg-white px-4 py-2 rounded-md dark:bg-[#121212] dark:text-white placeholder:dark:text-white"
      placeholder={placeholder}
    ></textarea>
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
);

const Contact = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send("service_nk7n31e", "template_nl69t4k", data, "3LqMFtplvqEm7Ww4-")
      .then(
        () => {
          showAlert("Message sent successfully!");
          reset();
        },
        (error) => {
          console.error("Error:", error);
          showAlert("Message could not be sent.");
        }
      );
  };

  const showAlert = (text) => {
    Swal.fire({
      text: text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container overflow-x-hidden">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold my-blue my-8 text-center">
        {t("contactUs.contact")}
      </h1>

      <div className="flex flex-col space-y-8 md:flex-row xl:flex-row md:space-x-6 xl:space-x-6">
        <div className="md:w-1/2 xl:w-1/2">
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-4 w-full">
              <div className="w-1/2">
                <InputField
                  label={t("contactUs.enterYourName")}
                  type="text"
                  register={register}
                  name="user_name"
                  placeholder={t("contactUs.enterYourName")}
                  error={errors.user_name}
                />
              </div>

              <div className="w-1/2">
                <InputField
                  label={t("contactUs.enterYourEmail")}
                  type="email"
                  register={register}
                  name="user_email"
                  placeholder={t("contactUs.enterYourEmail")}
                  error={errors.user_email}
                />
              </div>
            </div>

            <InputField
              label={t("contactUs.enterYourSubject")}
              type="text"
              register={register}
              name="message_subject"
              placeholder={t("contactUs.enterYourSubject")}
              error={errors.message_subject}
            />

            <TextAreaField
              label={t("contactUs.writeYourMessage")}
              register={register}
              name="message"
              placeholder={t("contactUs.writeYourMessage")}
              error={errors.message}
            />

            <button
              type="submit"
              className="bg-white p-4 mt-4 rounded-lg bg-my-blue text-white font-medium cursor-pointer"
            >
              {t("contactUs.sendMessage")}
            </button>
          </form>
        </div>

        <div className="max-w-full md:w-1/2 xl:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0397113063036!2d49.82477371186512!3d40.385812471325465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9b9925c3ed%3A0xeee07cb0b400caa2!2sAz%C9%99rbaycan%20D%C3%B6vl%C9%99t%20%C4%B0qtisad%20Universiteti%20(UNEC)!5e0!3m2!1saz!2saz!4v1741263946821!5m2!1saz!2saz"
            className="w-full h-[93%]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
