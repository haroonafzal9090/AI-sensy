import { StaticImageData } from "next/image";
import sell_products_img_1 from "@/assests/images/sell_products_img1.png"
import sell_products_img_2 from "@/assests/images/selll_product_image-3.png"
import sell_products_img_3 from "@/assests/images/selll_image_4.png"

export interface sell_your_products_Interface {
    id: number;
    title: string;
    description: string;
    image: StaticImageData ;
}

export const sell_your_products_data = [
    {
        id: 1,
        title: "DRAG & DROP CHATBOT & CATALOG BUILDER",
        description: "Build your Own Chatbot Flows your Way! Easy-to-use Chatbot & Catalog Flow builder to build your conversational journeys",
        image: sell_products_img_2,
    },
    {
        id: 2,
        title: "WHATSAPP CART & CATALOGS",
        description: "Drive Orders via WhatsApp with WhatsApp Catlaogs and Cart. Seamlessly build your Catalog in 10 minutes and get going! ",
        image: sell_products_img_3,
    },
    {
        id: 3,
        title: "WHATSAPP PAYMENTS",
        description: "Yes! Collect Payments now on WhatsApp Seamlessly with WhatsApp Pay and other modes of Payments (Razorpay, Payu etc) and grow your revenues. ",
        image: sell_products_img_1,
    }
]