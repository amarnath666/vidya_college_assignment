"use client"

import React, { useState } from "react";
import axios from "axios";
import { CircleCheck, IndianRupee, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from "@/redux/features/courseSlice";
import Stars from "./Stars";
import { RootState } from "@/redux/store";

const CourseForm = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state: RootState) => state.course.loggedIn);
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        email: "",
        password: "",
        dob: "",
        state: "",
        city: "",
        specialization: "",
        courseDetails: [
            {
                years: "3 Years",
                courseName: "BSc Computer Science"
            },
            {
                years: "2 Years",
                courseName: "Online MBA"
            }
        ],
        cvSubsidy: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            cvSubsidy: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted. Sending data:", formData);
        try {
            const response = await axios.post('/api/userForm', formData);
                router.push("/signin");
                toast("User created succesfully!!!")
                console.log('User created:', response.data)
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col p-4">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-blue-600">Compare & Select from 100+</h2>
                <p className="text-lg">Online MBA Universities</p>
            </div>

            <div className="flex justify-center items-center space-x-1 mb-4">
                <CircleCheck className="w-4 h-4 text-green-500" />
                <p className="text-[15px] text-green-500">No-Cost EMI FROM <IndianRupee className="inline w-3" /> 4,999</p>
                <CircleCheck className="w-4 h-4 text-green-500" />
                <p className="text-[15px] text-green-500">Subsidy Available* up to <IndianRupee className="inline w-3" />10,000</p>
            </div>

            <div className="relative mb-4">
                <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border h-[50px] border-black rounded-lg p-2 outline-none w-full peer"
                    placeholder=" "
                />
                <label
                    htmlFor="fullName"
                    className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                >
                    Full Name*
                </label>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="relative col-span-1">
                    <input
                        id="gender"
                        type="text"
                        value={formData.gender}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder=""
                    />
                    <label
                        htmlFor="gender"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        Gender*
                    </label>
                </div>
                <div className="relative col-span-1">
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder=""
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        Email*
                    </label>
                </div>
                <div className="relative col-span-1">
                    <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder=""
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        Password*
                    </label>
                </div>
                <div className="relative col-span-1">
                    <input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder="DD/MM/YYYY"
                    />
                    <label
                        htmlFor="dob"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        Date of Birth*
                    </label>
                </div>
                <div className="relative col-span-1">
                    <input
                        id="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="state"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        State*
                    </label>
                </div>
                <div className="relative col-span-1">
                    <input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="city"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        City*
                    </label>
                </div>
                <div className="relative col-span-2">
                    <input
                        id="specialization"
                        type="text"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="h-[50px] border border-black rounded-lg p-2 outline-none w-full peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="specialization"
                        className="absolute left-3 -top-2 text-sm bg-white px-1 transition-all text-outline"
                    >
                        Specialization*
                    </label>
                </div>
            </div>

            <div className="flex justify-between space-x-3 mb-4">
                <label className="flex items-center space-x-2 border border-green-300 pl-6 rounded-md h-14 w-[47%]">
                    <input
                        type="radio"
                        name="cv_subsidy"
                        value="I want CV Subsidy"
                        checked={formData.cvSubsidy === "I want CV Subsidy"}
                        onChange={handleRadioChange}
                        className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="flex flex-col text-black text-[15px] items-start">
                        <h1 className="font-bold flex items-center space-x-1">
                            <span>I want CV Subsidy</span>
                        </h1>
                        <span className="text-gray-600">Upto ₹10,000</span>
                    </span>
                </label>

                <label className="flex items-center space-x-2 border border-green-300 p-3 rounded-md h-14 w-[47%]">
                    <input
                        type="radio"
                        name="cv_subsidy"
                        value="Donate my CV Subsidy"
                        checked={formData.cvSubsidy === "Donate my CV Subsidy"}
                        onChange={handleRadioChange}
                        className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="flex flex-col text-black text-[15px] items-start">
                        <h1 className="font-bold flex items-center space-x-1">
                            <span>Donate my CV Subsidy</span>
                        </h1>
                        <span className="text-gray-600">Upto ₹10,000</span>
                    </span>
                </label>
            </div>
            <button type="submit" className="bg-blue-600 text-white rounded-lg p-2 w-full mt-2">
                Find Best University
            </button>
            <div className="flex justify-center mt-2">
                <button className="flex h-[20px] justify-center items-center mt-2 w-[300px] rounded-sm bg-green-200 p-2">
                    <Lock className="mr-2 w-3" />
                    <p className="text-[12px]">Your personal information is secure with us</p>
                </button>
            </div>
            <Stars />
        </form>
    );
};

export default CourseForm;
