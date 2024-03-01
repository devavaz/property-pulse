import Hero from '@/components/Hero'
import HomeProperties from '@/components/HomeProperties'
import InfoBoxes from '@/components/InfoBoxes'
// import connectDB from '@/config/database'




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