import { Card } from "@/components/ui/card";
import { LibraryBig } from "lucide-react";
import { useRouter } from "next/navigation";

interface SmallCardProps {
    upperButtonText: string;
    description: string;
    compareText: string;
}

const SmallCard = ({ upperButtonText, description, compareText }: SmallCardProps) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push('/courses'); 
      };
    return (
        <Card onClick={handleCardClick} className="w-[130px] h-[147px] flex flex-col justify-between items-center cursor-pointer">
            <div className="flex justify-end w-full">
                <button className="text-[13px] h-5 w-[70px] rounded-full bg-orange-100 text-blue-600">
                    {upperButtonText}
                </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <LibraryBig className="mb-2" />
                <p className="text-[12px] text-center">{description}</p>
            </div>
            <div className="w-full">
                <button className="w-full text-[13px] h-5 rounded-b-sm bg-blue-100 text-blue-600">
                    {compareText}
                </button>
            </div>
        </Card>
    );
};

export default SmallCard;
