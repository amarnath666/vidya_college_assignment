"use client"
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmallCard from "./_components/SmallCard";
import SideCard from "./_components/SideCard";
import { useSelector } from 'react-redux';
import { RootState } from "@/redux/store";

const Home = () => {
    const { courses, activeCourseId } = useSelector((state: RootState) => state.course);
    const activeCourse = courses.find(course => course.id === activeCourseId);

    return (
        <>
            <Banner />
            <div className="flex mt-8 ml-[100px]">
                <SideCard />
                <div className="ml-8 grid grid-cols-6 gap-4">
                    {activeCourse?.smallCards.map((cardData, index) => (
                        <SmallCard 
                            key={index}
                            upperButtonText={cardData.upperButtonText}
                            description={cardData.description}
                            compareText={cardData.compareText}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
