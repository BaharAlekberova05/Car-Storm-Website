import { Disclosure } from "@headlessui/react";
import { Link } from "react-router";

export default function FAQ() {
  return (
    <div className="container mb-14">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white">
        FAQ
      </h1>
      <div className="flex flex-col md:flex-row space-x-10 mt-6">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <p className="dark:text-white text-black text-3xl text-center md:text-left">
            We Answer on Your{" "}
            <span className="my-blue font-semibold">Important</span> Questions
          </p>

          <p className="dark:text-white text-center md:text-left">
            Thank you for your interest in our products. You may contact us by
            email, phone, fax, and online customer service. Please feel free to
            submit your inquiry in the form below. We will reply to you with
            details ASAP.
          </p>

          <Link to={"/contact"}>
            <button className="text-white p-4 bg-blue-600 text-sm font-semibold cursor-pointer mx-auto md:mx-0 mb-6">
              Ask Your Question
            </button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="w-full mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left rounded-lg cursor-pointer">
                    Why Should You Buy Car From Us{" "}
                    <span>{open ? "−" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
                    {" "}
                    At present, We have accumulated: 11000+ export vehicles, 50+
                    export countries, 100+ distribution partners, 60+
                    professional service teams!
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="w-full mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
                    What’s in your contract?
                    <span>{open ? "−" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
                    The contract will list the payment method, our receiving
                    bank, delivery time, product information and so on. Within
                    three days after signing the contract, you need to pay the
                    deposit.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="w-full mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
                    How to do the inspection for the car before shipping?
                    <span>{open ? "−" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
                    We will take a very clear video for customers before
                    shipping, and if customers still worry about the quality, we
                    can find a professional inspection third-party company to
                    help check the car, but the fee must be paid by the
                    customer.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="w-full mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
                    Does the price you quote include all fees?
                    <span>{open ? "−" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
                    CIP and CIF include the cost of transportation to the port,
                    but you need to clear the customs by yourself, if you don't
                    know how to clear the customs, we can help you.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="w-full mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="bg-[#307ff9] text-white flex justify-between w-full px-4 py-2 text-lg font-medium text-left  rounded-lg">
                    Can I have a price list of all your models?
                    <span>{open ? "−" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 dark:text-white">
                    Since we have a large number of models, and the price is
                    often changed, the price on the list may not be accurate
                    enough. I suggest that you better give us the list of models
                    you need, so that we can provide a more accurate quotation.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
