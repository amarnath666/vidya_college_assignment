"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { setAdminLoggedIn } from "@/redux/features/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Link from "next/link"
import { Search } from "lucide-react";

const AdminHeader = () => {
    const dispatch = useDispatch();
    const adminLoggedIn = useSelector(state => state.admin.adminLoggedIn);
    const router = useRouter();

    const handleClick = () => {
        router.push("/adminSignin");
    }

    const handleLogout = () => {
        router.push("/adminSignin");
        dispatch(setAdminLoggedIn(false));
        toast("Successfully logged out")
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="universal-logo.png" className="h-12" alt="Colleg Vidya" />
                    <span className="self-center text-[13px] font-normal whitespace-nowrap dark:text-white">
                        #ChunoApnaSahi
                    </span>
                </Link>

                {/* Search Bar */}
                <div className="flex items-center space-x-4 max-w-[300px] pl-2">
                    <Button
                        onClick={adminLoggedIn ? handleLogout : handleClick}
                        variant={"outline"}
                        className="border-blue-600 bg-white text-blue-600 hover:bg-white"
                    >
                        {adminLoggedIn ? "Logout" : "Sign In"}
                    </Button>
                    <div className="relative flex-1">
                        <input
                            type="text"
                            className="w-full bg-white p-2 pr-10 pl-4 text-sm text-gray-900 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search"
                            style={{ lineHeight: "1.5rem" }}
                        />
                        <Search className="absolute inset-y-0 right-3 my-auto text-gray-500" />
                    </div>
                </div>

            </div>

        </nav>
    );
};

export default AdminHeader;
