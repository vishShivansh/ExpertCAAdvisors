/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header2 = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div
      className={`p-4 ml-3 ${
        isScrolled
          ? "bg-gray-100 bg-opacity-90 fixed top-0 left-0 right-0 z-50 transition-all duration-300"
          : "bg--gray-100"
      }`}
    >
      <div className="flex space-x-4">
        <Link to={"/"} className="text-blue-500">
          Home
        </Link>
        <Link to={"/AboutUs.aspx"} className="text-blue-500">
          About Us
        </Link>
        <Link to={"/Newsfeed.aspx"} className="text-blue-500">
          NewsFeed
        </Link>
        <Link to={"/Career.aspx"} className="text-blue-500">
          Career
        </Link>
        <Link to={"/ContactUs.aspx"} className="text-blue-500">
          Contact Us
        </Link>
        <div className="relative z-10">
          <button
            onClick={toggleDropdown1}
            className="flex items-center text-blue-500"
          >
            Services
            <ChevronDownIcon
              className={`w-5 h-5 ml-1 transition-transform ${
                isOpen1 ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen1 && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg">
              <Link
                to={"#"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Audit and Assurance
              </Link>
              <Link
                to={"#"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Taxation
              </Link>
              <Link
                to={"#"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Accounting
              </Link>
              <Link
                to={"#"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Advisory
              </Link>
              <Link
                to={"#"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Payroll
              </Link>
            </div>
          )}
        </div>
        <div className="relative z-10">
          <button
            onClick={toggleDropdown2}
            className="flex items-center text-blue-500"
          >
            GST
            <ChevronDownIcon
              className={`w-5 h-5 ml-1 transition-transform ${
                isOpen2 ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen2 && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg">
              <Link
                to={"https://services.gst.gov.in/services/login"}
                target="_blank"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                GST Portal
              </Link>
              <Link
                to={"https://ewaybill.nic.in/"}
                target="_blank"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                E way bill portal
              </Link>
              <Link
                to={"gstacts.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Acts
              </Link>
              <Link
                to={"gstrules.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Rules
              </Link>
              <Link
                to={"GstCirculars.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Circulars
              </Link>
              <Link
                to={"GstNotifications.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Notifications
              </Link>
              <Link
                to={"GstForms.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Forms
              </Link>
              <Link
                to={"GstOrders.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Orders
              </Link>
              <Link
                to={"GstInstructions.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Instructions
              </Link>
              <Link
                to={"GstHSNCodeWithRate.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                HSN Code With Rate
              </Link>
              <Link
                to={"GstSACCode.aspx"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                SAC Code
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
