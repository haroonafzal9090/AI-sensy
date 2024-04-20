import { StaticImageData } from "next/image";
import brodcasting_img from "@/assests/images/brodcasting-meeting.png"
import live_chat_img from "@/assests/images/live-chat.png"
import ai_chatbots_img from "@/assests/images/ai_chatbots.png"
import aisensy_intregations_img from "@/assests/images/aisensy-integrations.png"
import inbuilt_crm_img from "@/assests/images/inbuilt-crm.png"


export interface whatsappPlateformDataInterface {
    id: number;
    tab_heading:string;
    heading: string;
    paragraph: string;
    description: string;
    buttonText: string;
    imageSrc: StaticImageData;
    altText: string;
}


export const whatsappPlateformData = [
    {
        id: 1,
        tab_heading:"Brodcasting messaging",
        heading : "Import & Broadcast Instantly",
        paragraph: "You can simply Import all your Contacts and Broadcast Approved Messages Instantly.",
        description:"See real-time analytics on the AiSensy Platform for delivered, read rates and more",
        buttonText: "Join Live Demo",
        imageSrc: brodcasting_img,
        altText: "brodcasting-img"
    },
    {
        id: 2,
        tab_heading:"live chat",
        heading : "Multiple Human Live Chat",
        paragraph: "Have multiple team members to drive Live Chat Support on the Same WhatsApp Business Number. ",
        description:"Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing.",
        buttonText: "Explore Pricing",
        imageSrc: live_chat_img,
        altText: "live-chat-img"
        
    },
    {
        id: 3,
        tab_heading:"a.i. chatbots",
        heading : "Solve Customer Queries 24x7",
        paragraph: "Connect Smart A.I. Chatbots from Google Dialogflow seamlessly & monitor conversations from Live Chat Dashboard",
        description:"Solve Customer Queries, Send Images, Files & Videos in a Smart Automated Manner.",
        buttonText: "Start your 14-Day FREE Trial",
        imageSrc: ai_chatbots_img,
        altText: "ai-chatbots-img"
    },
    {
        id: 4,
        tab_heading:"automate notifications",
        heading : "Connect your CRMs with APIs",
        paragraph: "Connect your CRM, Payment Portals, eCommerce Platforms like Shopify, WooCommerce, Hubspot. Zapier via APIs.",
        description:"Automate notifications for Abandoned Cart, Application Drop-off, Order Confirmation, Event Updates & more",
        buttonText: "Explore Integrations",
        imageSrc: aisensy_intregations_img,
        altText: "aisensy-intregations-img"
    },
    {
        id: 5,
        tab_heading:"inbuilt-crm",
        heading : "Manage Contacts, tags & more",
        paragraph: "Our In-Built CRM enables you to add various tags and attributes to each customer.",
        description:"AiSensy provides you with an extensive User Profile to drive important Insights ",
        buttonText: "Get Started with AiSensy",
        imageSrc: inbuilt_crm_img,
        altText: "inbuilt-crm-img"
    }

]