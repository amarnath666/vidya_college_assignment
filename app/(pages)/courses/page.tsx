import React from "react";

import Colleges from "@/app/_components/Colleges";
import CourseBottomSection from "@/app/_components/CourseBottomSection";
import CourseForm from "@/app/_components/CourseForm";
const Courses = () => {
    return (
        <div className="w-[950px] shadow-lg flex">
            <div className="w-[400px] p-4">
                <Colleges />
                <CourseBottomSection />
            </div>
            <div className="flex-1 p-4">
                <CourseForm />
            </div>
        </div>
    );
}

export default Courses;