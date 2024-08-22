import React from 'react';
import {
    Card,
    CardHeader,
} from "@/components/ui/card";

const imageSources = [
    { src: '/job.png', description: 'Cv Job Portal' },
    { src: '/alumni_grp.png', description: 'Cv Internship Portal' },
    { src: '/video-calling.png', description: 'Video Counselling' },
    { src: '/cv_loan.png', description: 'Cv Loans' },
    { src: '/asking.png', description: 'Cv Q&A panel' },
    { src: '/post_admission.png', description: 'Post Admission Services' },
    { src: '/verify_university.png', description: 'Verify Your University' },
    { src: '/resume.png', description: 'Create Resume' },
];

const CvCard = () => {
    return (
        <div>
            <h1 className="text-start text-[35px] font-bold mb-6 ml-[57px] mt-[100px]">Do More with CV</h1>
            <div className="flex flex-col items-center">
                <div className="w-[90%] bg-white p-4 rounded-lg shadow-lg mt-4">
                    <div className="grid grid-cols-8 gap-4">
                        {imageSources.map((item, index) => (
                            <div key={index} className="flex flex-col items-center h-[110px] border-r border-gray-300 last:border-r-0">
                                <CardHeader className="flex flex-col items-center h-full p-2">
                                    <img src={item.src} alt={`Card Image ${index + 1}`} className="w-10 h-10 object-cover mb-2" />
                                    <p className="text-center text-gray-600 text-xs">{item.description}</p>
                                </CardHeader>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CvCard;
