import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

const CourseBottomSection = () => {
    return (
        <div>
            <Card className="bg-blue-50">
                <CardHeader className="bg-blue-100">
                    <CardTitle className="text-blue-600 font-bold">
                        India's leading universities on a single platform within two minutes.
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">100+ Universities</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">30x comparison factors</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">Free expert consultation</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">Quick Loan facility</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">Celebrating 1 lac admissions</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">Post Admission Support</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">CV Exclusive Community</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4" />
                        <p className="text-[15px]">Job + Internship Portal</p>
                    </div>
                </CardContent>
                <div className="flex justify-center">
                    <img src="mayur.png" alt="mayur" className="w-[150px]" />
                </div>
            </Card>
        </div>
    );
}

export default CourseBottomSection;
