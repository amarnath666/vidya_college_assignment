import React from "react";
import { Star } from "lucide-react";
const Stars = () => {
    return (
        <div className="mt-3 flex justify-center items-center space-x-2">
                <p className="text-[12px]">Connect with Top CV Experts</p>
                <Star className="text-yellow-500 w-3" />
                <Star className="text-yellow-500 w-3" />
                <Star className="text-yellow-500 w-3" />
                <Star className="text-yellow-500 w-3" />
                <Star className="text-yellow-500 w-3" />
            </div>
    )
}

export default Stars;