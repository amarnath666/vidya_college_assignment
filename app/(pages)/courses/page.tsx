import React from "react";

import Colleges from "@/app/_components/Colleges";
import CourseBottomSection from "@/app/_components/CourseBottomSection";
import CourseForm from "@/app/_components/CourseForm";
import Header from "@/app/_components/Header";

const Courses = () => {
    return (
      <div>
        <Header />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[950px] shadow-2xl flex">
          <div className="w-[400px] p-4">
            <Colleges />
            <CourseBottomSection />
          </div>
          <div className="flex-1 p-4">
            <CourseForm />
          </div>
        </div>
      </div>
      </div>
    );
  };
  
export default Courses;