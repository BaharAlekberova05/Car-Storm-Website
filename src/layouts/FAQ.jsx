import { Disclosure } from "@headlessui/react";
import { Link } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-12">
        {t("faq.title")}
      </h1>

      <div className="flex flex-col md:flex-row mt-8 md:space-x-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t("faq.introduction1")}
            <span className="my-blue font-semibold">{t("faq.important")}</span>
            {t("faq.introduction2")}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {t("faq.contactInfo")}
          </p>
          <Link to="/contact">
            <button className="bg-my-blue hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer mb-6">
              {t("faq.askQuestion")}
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE (FAQ) */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                    {faq.question}
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
