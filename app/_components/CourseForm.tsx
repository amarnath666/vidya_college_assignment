import React from "react";
import Colleges from "@/app/_components/Colleges";
import CourseBottomSection from "@/app/_components/CourseBottomSection";
import { CircleCheck, Lock, Star } from "lucide-react";

const CourseForm = () => {
    return (
        <div className="w-full flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-4">Compare & Select from 100+</h2>
            <p>Online MBA Universities</p>
            <h4><CircleCheck className="w-4" /> No-Cost EMI FROM  &#8377 4,999 <CircleCheck className="w-4" />  Subsity Available* upto  &#8377 10,000</h4>
            <input 
                type="text" 
                placeholder="Full Name*" 
                className="border border-gray-300 rounded-lg w-full p-2 mb-4 outline-none"
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input 
                    type="text" 
                    placeholder="Gender*" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="Password*" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="Date of Birth*" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="State*" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="City*" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="Specialization*" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="I Want CV Subsidy" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
                <input 
                    type="text" 
                    placeholder="" 
                    className="border border-gray-300 rounded-lg p-2 outline-none"
                />
            </div>
            <button 
                className="bg-blue-600 text-white rounded-lg p-2 w-full mt-2"
            >
                Find Best University
            </button>
            <button>
                <Lock /> <p>Your personal information is secure with us</p>
            </button>
            <p>Connect with Top CV Experts <Star /><Star /><Star /><Star /><Star /></p>
        </div>
    );
};

export default CourseForm;