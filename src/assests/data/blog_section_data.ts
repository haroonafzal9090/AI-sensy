import { StaticImageData } from "next/image";
import blog_email from "@/assests/images/blog-email-img-1.png"
import blog_get_number from "@/assests/images/blog-get-number-image2.png"
import blog_coversation from "@/assests/images/blog-conversation-image3.png"
import blog_whatsapp_payment from "@/assests/images/blog-whatsapp-payment.png"
import blog_whatsapp_template from "@/assests/images/blog-whatspp-template.png"
import blog_whatsapp_for_sale from "@/assests/images/whatsapp-for-sale.png"




export interface blogSectionInterface {
    id: number;
    heading: string;
    imageSrc?: StaticImageData ;
    altText: string;
}

export const blogSectionData = [
    {
        id: 1,
        heading:"WhatsApp vs Email Marketing: Which is More Effective?",
        imageSrc: blog_email,
        altText:"email marketing",
    },
    {
        id: 2,
        heading:"How to get Virtual Number for WhatsApp (Hassle-free process)",
        imageSrc: blog_get_number,
        altText:"get number",
    },
    {
        id: 3,
        heading:"AiSensy crowned Meta's Emerging Partner of the Year 2023",
        imageSrc: blog_coversation,
        altText:"conversation",
    },
    {
        id: 4,
        heading:"WhatsApp Pay for Businesses: Benefits, Features, and Setup",
        imageSrc: blog_whatsapp_payment,
        altText:"whatsapp payment",
    },
    {
        id: 5,
        heading:"12 Effective Tips to Boost Sales with WhatsApp Business API",
        altText:"tips"
        
    },
    {
        id: 6,
        heading:"Top 10 Useful WhatsApp Template Messages for Education Sector (Copy Right Now)",
        imageSrc: blog_whatsapp_template,
        altText:"whatsapp template",
    },
    {
        id: 7,
        heading:"Mastering WhatsApp for Sales and Lead Generation: Top 10 Strategies",
        imageSrc: blog_whatsapp_for_sale,
        altText:"whatsapp for sale",
    },
    {
        id: 8,
        heading:"7 Reasons to integrate WhatsApp Business API for seamless Conversations",
        altText:"7 reasons"
    }
]