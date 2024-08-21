"use client"

import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { setLoggedIn } from "@/redux/features/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Link from "next/link";

const Header = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.course.loggedIn);
    const router = useRouter();

    const handleClick = () => {
        router.push("/signin");
    } 

    const handleLogout = () => {
        router.push("/");
        dispatch(setLoggedIn(false));
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

                {/* Dropdowns, Buttons, and Search Bar */}
                <div className="flex items-center">
                    {/* Dropdowns */}
                    <div className="flex">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-blue-600 hover:bg-blue-600 text-[12px] font-bold">
                                    Explore Programs <ChevronDown size={18} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Programs</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Undergraduate</DropdownMenuItem>
                                <DropdownMenuItem>Postgraduate</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-white text-black hover:bg-white text-[14px] font-normal">
                                    Top Universities <ChevronDown size={18} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Universities</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Top 10</DropdownMenuItem>
                                <DropdownMenuItem>By Country</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-white text-black text-[14px] font-normal hover:bg-white">
                                    More <ChevronDown size={18} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>More Options</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Scholarships</DropdownMenuItem>
                                <DropdownMenuItem>Events</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <Button variant="outline" className="bg-blue-50 text-blue-600">
                            Suggest in 2 Mins
                        </Button>
                        <Button onClick={loggedIn ? handleLogout : handleClick} variant={"outline"} className="border-blue-600 bg-white text-blue-600 hover:bg-white">
                            {loggedIn ? "Logout" : "Sign In"}
                        </Button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-[130px] pl-2">
                        <input
                            type="text"
                            className="w-full bg- p-2 pr-10 pl-4 text-sm text-gray-900 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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

export default Header;
