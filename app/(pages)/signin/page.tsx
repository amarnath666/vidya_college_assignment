"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "@/redux/features/courseSlice";
import { Button } from "@/components/ui/button";
import Stars from "@/app/_components/Stars";
import { Lock } from "lucide-react";
import Header from "@/app/_components/Header";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/signIn", { email, password });
            if (response.status === 200) {
                dispatch(setLoggedIn(true));
                router.push("/dashboard");
                toast("Sign in successful!");
            }
        } catch (error) {
            console.error("Sign in error:", error);
            toast("Error signing in. Please try again.");
        }
    };

    const handleSignUp = () => {
        router.push("/courses");
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-600">
                            Sign In
                        </Button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        New user?{" "}
                        <button onClick={handleSignUp} className="text-blue-600 underline">
                            Sign up here
                        </button>
                    </p>
                    <div className="flex justify-center mt-2">
                        <button className="flex h-[20px] justify-center items-center mt-2 w-[300px] rounded-sm bg-green-200 p-2">
                            <Lock className="mr-2 w-3" />
                            <p className="text-[12px]">Your personal information is secure with us</p>
                        </button>
                    </div>
                    <Stars />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
