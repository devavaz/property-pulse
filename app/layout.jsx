import Footer from '@/components/Footer'
import '../assets/styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
    title: 'PropertyPulse | Find the Perfect Rental',
    description: 'Find the perfect rental property for you and your family. PropertyPulse is the best place to find your next home.',
    keywords: 'rental, find rentals, find properties'
}


const MainLayout = ({children}) => {
  return (
    <html lang='en'>
       <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
       </body>
    </html>
   
  )
}

export default MainLayout