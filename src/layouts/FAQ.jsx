// import { Disclosure } from "@headlessui/react";
// import { Link } from "react-router";

// export default function FAQ() {
//   return (
//     <div className="container mb-14">
//       <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white">
//         FAQ
//       </h1>
//       <div className="flex flex-col md:flex-row space-x-10 mt-6">
//         {/* LEFT */}
//         <div className="w-full md:w-1/2 flex flex-col space-y-6">
//           <p className="dark:text-white text-black text-3xl text-center md:text-left">
//             We Answer on Your{" "}
//             <span className="my-blue font-semibold">Important</span> Questions
//           </p>

//           <p className="dark:text-white text-center md:text-left">
//             Thank you for your interest in our products. You may contact us by
//             email, phone, fax, and online customer service. Please feel free to
//             submit your inquiry in the form below. We will reply to you with
//             details ASAP.
//           </p>

//           <Link to={"/contact"}>
//             <button className="text-white p-4 bg-blue-600 text-sm font-semibold cursor-pointer mx-auto md:mx-0 mb-6">
//               Ask Your Question
//             </button>
//           </Link>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full md:w-1/2 flex flex-col space-y-4">
//           <div className="w-full mx-auto">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left rounded-lg cursor-pointer">
//                     Why Should You Buy Car From Us{" "}
//                     <span>{open ? "−" : "+"}</span>
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
//                     {" "}
//                     At present, We have accumulated: 11000+ export vehicles, 50+
//                     export countries, 100+ distribution partners, 60+
//                     professional service teams!
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>

//           <div className="w-full mx-auto">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
//                     What’s in your contract?
//                     <span>{open ? "−" : "+"}</span>
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
//                     The contract will list the payment method, our receiving
//                     bank, delivery time, product information and so on. Within
//                     three days after signing the contract, you need to pay the
//                     deposit.
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>

//           <div className="w-full mx-auto">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
//                     How to do the inspection for the car before shipping?
//                     <span>{open ? "−" : "+"}</span>
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
//                     We will take a very clear video for customers before
//                     shipping, and if customers still worry about the quality, we
//                     can find a professional inspection third-party company to
//                     help check the car, but the fee must be paid by the
//                     customer.
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>

//           <div className="w-full mx-auto">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
//                     Does the price you quote include all fees?
//                     <span>{open ? "−" : "+"}</span>
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
//                     CIP and CIF include the cost of transportation to the port,
//                     but you need to clear the customs by yourself, if you don't
//                     know how to clear the customs, we can help you.
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>

//           <div className="w-full mx-auto">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
//                     Can I have a price list of all your models?
//                     <span>{open ? "−" : "+"}</span>
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
//                     Since we have a large number of models, and the price is
//                     often changed, the price on the list may not be accurate
//                     enough. I suggest that you better give us the list of models
//                     you need, so that we can provide a more accurate quotation.
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Disclosure } from "@headlessui/react";
import { Link } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "Why Should You Buy Car From Us?",
      answer:
        "At present, we have accumulated: 11000+ export vehicles, 50+ export countries, 100+ distribution partners, 60+ professional service teams!",
    },
    {
      question: "What’s in your contract?",
      answer:
        "The contract will list the payment method, our receiving bank, delivery time, product information, etc. Within three days after signing the contract, you need to pay the deposit.",
    },
    {
      question: "How to do the inspection for the car before shipping?",
      answer:
        "We will take a very clear video for customers before shipping. If customers still worry about the quality, we can find a professional third-party inspection company, but the fee must be paid by the customer.",
    },
    {
      question: "Does the price you quote include all fees?",
      answer:
        "CIP and CIF include transportation costs to the port, but customs clearance must be done by you. If you need help, we can assist with that.",
    },
    {
      question: "Can I have a price list of all your models?",
      answer:
        "Since we have a large number of models and prices change often, the list price may not be accurate. Provide a list of models you need, and we’ll give an accurate quote.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-12">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col md:flex-row mt-8 md:space-x-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            We Answer Your{" "}
            <span className="my-blue font-semibold">Important</span>{" "}
            Questions
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            If you have more questions, feel free to contact us via email,
            phone, or online service.
          </p>
          <Link to="/contact">
            <button className="bg-my-blue hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer mb-6">
              Ask Your Question
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
