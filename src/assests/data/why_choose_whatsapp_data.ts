import { StaticImageData } from "next/image";
import cardImg1 from "@/assests/images/card-img-1.png"
import cardImg2 from "@/assests/images/card-img-2.png"
import cardImg3 from "@/assests/images/card-img-3.png"

export interface WhyChooseWhatsappDataInterface {
    id: number;
    heading: string;
    imageSrc: StaticImageData;
    
}

export const whyChooseWhatsappData = [
    {
        id: 1,
        heading:"98% Open Rates",
        imageSrc:cardImg1
    },
    {
        id: 2,
        heading:"45-60% Click Rates",
        imageSrc:cardImg2
    },
    {
        id: 3,
        heading:"2.4 Bn+ Users",
        imageSrc:cardImg3
    }
]