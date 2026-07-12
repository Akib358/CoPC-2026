import Hero from '../components/home/Hero'
import Countdown from '../components/home/Countdown'
import EventCards from '../components/home/EventCards'
import TimelineSection from '../components/home/TimelineSection'
import ScheduleSection from '../components/home/ScheduleSection'
import SponsorsSection from '../components/home/SponsorsSection'
import LegacySection from '../components/home/LegacySection'
import FaqSection from '../components/home/FaqSection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <EventCards />
      <TimelineSection />
      <ScheduleSection />
      <SponsorsSection />
      <LegacySection />
      <FaqSection />
      <ContactSection />
    </>
  )
}