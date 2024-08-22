"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/redux/features/adminUserDetailsSlice";
import { RootState } from "@/redux/store";

const UserDetails = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state: RootState) => state.adminUserDetails);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(users);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white text-sm">
                <thead>
                    <tr>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">User Id</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">Full Name</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">Email</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">Gender</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">City</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">State</th>
                        <th className="px-2 py-1 text-left font-medium text-gray-900">Specialization</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id} className="odd:bg-gray-50">
                            <td className="px-2 py-1 text-gray-900">{user.id}</td>
                            <td className="px-2 py-1 text-gray-900">{user.fullName}</td>
                            <td className="px-2 py-1 text-gray-700">{user.email}</td>
                            <td className="px-2 py-1 text-gray-700">{user.gender}</td>
                            <td className="px-2 py-1 text-gray-700">{user.city}</td>
                            <td className="px-2 py-1 text-gray-700">{user.state}</td>
                            <td className="px-2 py-1 text-gray-700">{user.specialization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
