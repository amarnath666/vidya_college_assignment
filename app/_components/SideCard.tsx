import {
    Card,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCourse } from "@/redux/features/courseSlice";
import { RootState } from "@/redux/store";

const SideCard = () => {
    const dispatch = useDispatch();
    const { courses, activeCourseId } = useSelector((state: RootState) => state.course);

    return (
        <Card className="w-[285px] h-[485px]  pl-4 pr-4 pt-4 overflow-y-auto">
            {courses.map(course => (
                <div 
                    key={course.id} 
                    onClick={() => dispatch(setActiveCourse(course.id))}
                    className={`p-2 rounded-sm cursor-pointer ${activeCourseId === course.id ? 'bg-blue-600 text-white' : ''}`}
                >
                    <CardTitle className="text-[17px] mb-2">
                        {course.name}
                    </CardTitle>
                    {course.buttonText && (
                        <button 
                            className={`text-[13px] h-5 w-[120px] rounded-sm ${activeCourseId === course.id ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'} hover:bg-blue-600 hover:text-white `}
                        >
                            {course.buttonText}
                        </button>
                    )}
                </div>
            ))}
        </Card>
    );
};

export default SideCard;
