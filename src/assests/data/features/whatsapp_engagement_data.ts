import { StaticImageData } from "next/image";
import whatsapp_products_img_1 from "@/assests/images/live-chat.png"
import whatsapp_products_img_2 from "@/assests/images/smart-audience.png"
import whatsapp_products_img_3 from "@/assests/images/seamless_chatbot.png"

export interface whatsapp_engagement_data_Interface {
    id: number;
    title: string;
    description: string;
    image: StaticImageData ;
}

export const whatsapp_engagement_data = [
    {
        id: 1,
        title: "Smooth Chatbot to Human Transfer",
        description: "Monitor Chatbot Conversations and Take over the Conversation smoothly. Get Notified when for Bot to Human Transfers",
        image: whatsapp_products_img_1,
    },
    {
        id: 2,
        title: "Smart Audience Segmentation",
        description: "No Need to Upload Excel Each time you wish to broadcast! Segregate Audiences using Filters and Broadcast Accordingly.",
        image: whatsapp_products_img_2,
    },
    {
        id: 3,
        title: "Seamless Chatbot Integration",
        description: "Integrate Google Dialogflow Chatbot in a Single Click. Send Images, Docs, Videos in a Smart Automated Manner to Drive Sales & Support",
        image: whatsapp_products_img_3,
    }
]