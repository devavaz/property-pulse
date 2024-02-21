import Hero from '@/components/Hero'
import HomeProperties from '@/components/HomeProperties'
import InfoBoxes from '@/components/InfoBoxes'

const Home = () => {
  return (
   <section>
     <Hero  />
     <InfoBoxes />
     <HomeProperties />
   </section>
  )
}

export default Home