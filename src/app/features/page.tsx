import Drive_5x_Leads_Section from '@/widgets/Features/Drive-5x-Leads-Section'
import Hero_Section from '@/widgets/Features/Hero-Section'
import Power_Pack_Demo from '@/widgets/Features/Power-Power-Demo-Section'
import Powerful_Features_Section from '@/widgets/Features/Powerful-Features'
import Whatsapp_Engagement_Section from '@/widgets/Features/Whatsapp-Engagment Section'
import React from 'react'

function Features() {
  return (
    <main>
        {/* Hero Section */}
        <Hero_Section/>
        {/* Power Power Demo */}
        <Power_Pack_Demo/>
        {/* Whatsapp Engagment */}
        <Whatsapp_Engagement_Section/>
        {/* Powerful Features */}
        {/* <Powerful_Features_Section/> */}
        {/* Drive_5x_Leads_Section */}
        <Drive_5x_Leads_Section/>
    </main>
  )
}

export default Features