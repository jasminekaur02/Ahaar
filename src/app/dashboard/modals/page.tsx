"use client";
import { SetStateAction, useState } from "react";
import { useFeedbackModalContext } from "@/components/contexts/ModalProvider";
import { Grandstander } from "next/font/google";

const grandstander = Grandstander({ subsets: ["latin"] });

export default function Dashboard() {
  const feedbackModalContext = useFeedbackModalContext();
  const { openGeneralModal } = useFeedbackModalContext();

  const openGenModal: any = () => {
    return openGeneralModal({
      heading: heading,
      description: description,
      buttonName: buttonName,
      buttonHref: buttonHref,
    });
  };
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [buttonName, setButtonName] = useState("");
  const [buttonHref, setButtonHref] = useState("");

  // Event handlers to update state on input change
  const handleHeadingChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setHeading(e.target.value);
  const handleDescriptionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setDescription(e.target.value);
  const handleButtonNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setButtonName(e.target.value);
  const handleButtonHrefChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setButtonHref(e.target.value);

  return (
    <div className="">
      <div className="container mx-auto my-10 px-10 space-y-8 xl:max-w-7xl">
        {/* <div className="container mx-auto my-10 px-10 space-y-8 lg:space-y-16 xl:max-w-7xl"> */}

        {/* Heading */}
        <div>
          <h2
            className={`mb-4 lg:mb-6 flex items-center space-x-3 text-4xl lg:text-5xl font-extrabold ${grandstander.className} `}
          >
            <span className="w-1.5 self-stretch rounded-lg bg-[#23372a]" />
            <span>Explore Our Range of Modal Options</span>
          </h2>
          <h3 className="text-base lg:text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">
            Our diverse collection of modals caters to various needs, whether
            you want to showcase General features, convey important information,
            or gather user feedback.
          </h3>
        </div>

        {/* Cards: Simple */}
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm max-w-lg">
          {/* Card Header */}
          <div className="bg-gray-50 px-5 py-4">
            <h3 className="font-medium text-base lg:text-lg">Feedback Modal</h3>
          </div>
          {/* END Card Header */}

          {/* Card Body */}
          <div className="grow p-5">
            <p className="text-gray-700 text-sm lg:text-base">
              Use this modal to gather valuable feedback from users. Whether
              it&apos;s about your food,items or overall experience,
              we&apos;re here to listen.
            </p>
          </div>
          {/* END Card Body */}

          {/* Card Footer */}
          <div
            onClick={feedbackModalContext.openFeedbackModal}
            className="bg-[#23372a] hover:bg-green-700 px-5 py-4 text-xs lg:text-sm text-white cursor-pointer rounded-b-lg"
          >
            <p>Open Feedback Modal</p>
          </div>
          {/* END Card Footer */}
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm max-w-lg">
          {/* Card Header */}
          <div className="bg-gray-50 px-5 py-4">
            <h3 className="font-medium text-base lg:text-lg">General Modal</h3>
          </div>
          {/* END Card Header */}

          {/* Card Body */}
          <form className="space-y-6 px-5 py-4">
            {/* Form inputs modified below */}

            {/* Text Input */}
            <div className="space-y-1">
              <label
                htmlFor="heading"
                className="font-medium text-sm lg:text-base"
              >
                Heading
              </label>
              <input
                type="text"
                id="heading"
                name="heading"
                placeholder="Enter modal heading"
                value={heading}
                onChange={handleHeadingChange}
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-[#23372a] focus:ring focus:ring-[#23372a] focus:ring-opacity-50"
              />
            </div>
            {/* END Text Input */}

            {/* Description Input */}
            <div className="space-y-1">
              <label
                htmlFor="Description"
                className="font-medium text-sm lg:text-base"
              >
                Description
              </label>
              <textarea
                rows={5}
                id="Description"
                name="Description"
                placeholder="Enter your Description"
                value={description}
                onChange={handleDescriptionChange}
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-[#23372a] focus:ring focus:ring-[#23372a] focus:ring-opacity-50"
              />
            </div>
            {/* END Description Input */}

            {/* Button Name Input */}
            <div className="space-y-1">
              <label
                htmlFor="Button Name"
                className="font-medium text-sm lg:text-base"
              >
                Button Name
              </label>
              <input
                type="text"
                id="Button Name"
                name="Button Name"
                placeholder="Enter your Button Name"
                value={buttonName}
                onChange={handleButtonNameChange}
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-[#23372a] focus:ring focus:ring-[#23372a] focus:ring-opacity-50"
              />
            </div>
            {/* END Button Name Input */}

            {/* Button Href Input */}
            <div className="space-y-1">
              <label
                htmlFor="Button Href"
                className="font-medium text-sm lg:text-base"
              >
                Button Href
              </label>
              <input
                type="text"
                id="Button Href"
                name="Button Href"
                placeholder="Enter Button Href"
                value={buttonHref}
                onChange={handleButtonHrefChange}
                className="block w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-[#23372a] focus:ring focus:ring-[#23372a] focus:ring-opacity-50"
              />
            </div>
            {/* END Button Href Input */}
          </form>
          {/* END Card Body */}

          {/* Card Footer */}
          <div
            onClick={openGenModal}
            className="bg-[#23372a] hover:bg-green-700 px-5 py-4 text-xs lg:text-sm text-white cursor-pointer rounded-b-lg"
          >
            <p>Open General Modal</p>
          </div>
          {/* END Card Footer */}
        </div>
      </div>
    </div>
  );
}
