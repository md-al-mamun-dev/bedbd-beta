import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import SearchFilter from '@/components/SearchFilter'
import ListingGallery from '@/components/ListingGallery'
import UserEntrance from '@/components/UIElements/UserEntrance/PhoneInput'
import AccountProvider from '../context/account/accountContext'

export default function Home() {
  // const [openSidebar, setOpenSlider] = useState(true);
  // const [introductorySectionlRole, setIntroductorySectionlRole] = useState('sidebar');

  



// const openSlider = () =>{
//   setOpenSlider(true)
// }
// const closeSlider = () =>{
//   setOpenSlider(false)
// }



  return (
    <>
      <AccountProvider>
        <Header/>
      </AccountProvider>
      <div className={`w-100 z-index-1 `}>
          <SearchFilter />
          <ListingGallery/>            
      </div>
      {/* <Footer/> */}
    </>
    
  )
}
