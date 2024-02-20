import '../assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse | Find the Perfect Rental',
    description: 'Find the perfect rental property for you and your family. PropertyPulse is the best place to find your next home.',
    keywords: 'rental, find rentals, find properties'
}


const MainLayout = ({children}) => {
  return (
    <html lang='en'>
       <body>
          <div>{children}</div>
       </body>
    </html>
   
  )
}

export default MainLayout