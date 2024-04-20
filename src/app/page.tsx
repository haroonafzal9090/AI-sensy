import BlogSection from '@/widgets/Blog Section'
import Brodcast_Section from '@/widgets/Brodcast Section'
import Click_To_Whatsapp from '@/widgets/Click To Whatsapp Section'
import Customer_Response from '@/widgets/Customer Response'
import CustomersAreOnWhatsapp from '@/widgets/Customers Are On Whatsapp'
import Founders_Section from '@/widgets/Founders & Marketers'
import Get_Whatsapp_Business from '@/widgets/Get-WhatsApp-Business'
import Hero from '@/widgets/Hero'
import ProductAndSupport from '@/widgets/Product And Support'
import SafeYourDropOffs from '@/widgets/Safe-Your-DropOffs'
import Sell_Products_Section from '@/widgets/Sell Your Products Section'
import Smart_Retargeting_For_Sales from '@/widgets/Smart Retargeting'
import TierSection from '@/widgets/Tier Section'
import Video_Section from '@/widgets/Video Section'
import Whatsapp_Plateform_Section from '@/widgets/Whatsapp Platform Section'
import Why_Choose_Whatsapp from '@/widgets/Why Choose Whatsapp'
import React from 'react'

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero/>
      {/* Founders & Marketers Section */}
      <Founders_Section/>
      {/* Video Section */}
      <Video_Section/>
      {/* Brodcast Section */}
      <Brodcast_Section/>
      {/* Sell Your Products Section */}
      <Sell_Products_Section/>
      {/* Click To Whatsapp Section */}
      <Click_To_Whatsapp/>
      {/* Smart Retargeting For Sale Section */}
      <Smart_Retargeting_For_Sales/>
      {/* Whatsapp Platform Section */}
      <Whatsapp_Plateform_Section/>
      {/* Save Your Drop Off Section */}
      <SafeYourDropOffs/>
      {/* Whatsapp Bussiness Section */}
      <Get_Whatsapp_Business/>
      {/* Why Choose Whatsapp Section */}
      <Why_Choose_Whatsapp/>
      {/* Customer Response */}
      <Customer_Response/>
      {/* Product & Support */}
      <ProductAndSupport/>
      {/* Tier Section */}
      <TierSection/>
      {/* Customers Are On Whatsapp */}
      <CustomersAreOnWhatsapp/>
      {/* Blog Section */}
      <BlogSection/>
    </main>
  )
}

export default Home