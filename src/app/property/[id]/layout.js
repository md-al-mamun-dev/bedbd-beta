
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'Bedbd.com',
  description: 'Find your sweet place',
}

export default function RootLayout({ children }) {
  return (
    <>
        <Header/>
          {children}
        {/* <Footer/> */}
    </>


  )
}
