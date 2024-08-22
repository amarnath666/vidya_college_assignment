"use client"
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import SmallCard from "./_components/SmallCard";
import SideCard from "./_components/SideCard";
import { useSelector } from 'react-redux';
import { RootState } from "@/redux/store";
import CvCard from "./_components/CvCard";
import FeaturesCard from "./_components/FeaturesCard";

const Home = () => {
    const { courses, activeCourseId } = useSelector((state: RootState) => state.course);
    const activeCourse = courses.find(course => course.id === activeCourseId);

    return (
        <>
        <Header />
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
            <CvCard />
            <FeaturesCard />
        </>
    );
};

export default Home;
