import React from "react";
import { LuNotebookPen } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 mt-10">
      <div className="container mx-auto grid grid-cols-4 gap-4 pb-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-[#0e7c66]">
            <LuNotebookPen size={30} />
            StudyFlow
          </h3>
          <p className="text-gray-500">
            A study dashboard for turning goals into daily progress.
          </p>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-2">
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">Features</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">pricing</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-2">
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">Features</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">pricing</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-2">
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">Features</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">pricing</a>
            </li>
            <li className="text-gray-500 hover:text-[#0e7c66] cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 pt-6 border-t border-t-gray-200">© {new Date().getFullYear()} StudyFlow. Built as teaching material - not a real product.</p>
    </footer>
  );
};

export default Footer;
