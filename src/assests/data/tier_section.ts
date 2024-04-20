import { StaticImageData } from "next/image";
import summer_tier_img from "@/assests/images/summer-tier.png"
import asia_tier_img from "@/assests/images/aisa-tier.png"
import user_love_us_img from "@/assests/images/users-love-us.png"

export interface TierSection {
    id: number;
    imgSrc: StaticImageData;
    altText: string;
}

export const tier_section = [
    {
        id: 1,
        imgSrc: summer_tier_img,
        altText:"summer tier"
    },
    {
        id: 2,
        imgSrc: asia_tier_img,
        altText:"asia tier"
    },
    {
        id: 3,
        imgSrc: user_love_us_img,
        altText:"user love us"
    }
]