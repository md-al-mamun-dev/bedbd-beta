'use client'
import styles from './index.module.css'
import Navbar from '../Navbar'
import Image from 'next/image'
// import dummy_profile_img from './images/profile-dummy.svg'
// import { Filter } from 'lucide-react'
import { Menu, X , } from 'lucide-react'
import { useState } from 'react'
// import LucidIcon from '../LucidIcon'
import ProfileImage from './ProfileImage'
import UserEntrance from '../UIElements/UserEntrance'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showLoginRegisterBox, setShowLoginRegisterBox] = useState(false)


  const toggleMenu =()=>setShowMenu(!showMenu)
  const loginBtnClickHandlar =()=>{
    setShowLoginRegisterBox(true)
  }

  const closeBtnClickHandlar =()=>{
    setShowLoginRegisterBox(false)
  }



  return (
    <div className={` sticky box-shadow-gray z-index-5 | ${styles.header}  `}>
        <div className={`container | ${styles.nav_wrapper} `}>
            <div className= {`logo `}>
              <div className={`${styles.logo_wrapper}`}>
                <Image className={`${styles.logo_image} `} src={`/logo.png`}  fill />
              </div>
              {/* <a className='temp-logo-txt' href="#">bedbd.com</a> */}
            </div>

            
              <div className={`${styles.header_section_r}  ${ showMenu ? 'flex' : 'display-sm-none' } `} >
                <Navbar/>
                <button className={`btn ${styles.btn_join}`}>Become A Host</button>                
                {/* <div className={`padding-10 round | ${styles.profile_img_container}  `}> <Image src={'images/profile-dummy.svg'} height={36} width={36}/></div> */}
                <ProfileImage logInBtnHandlar={loginBtnClickHandlar}/>
              </div>
           

            <button className={`${styles.menu_toggle_btn}`} onClick={toggleMenu}>
                {/* <LucidIcon className={`${styles.icon}`} name={`${showMenu ? 'x' : 'menu'}`} size={24} /> */}
                {
                  showMenu 
                    ? <X  size={24}/>
                    : <Menu  size={24}/>
                }
                {/* {
                  showMenu 
                    ? <LucidIcon className={`${styles.icon}`} name='x' size={24} />
                    : <LucidIcon className={`${styles.icon}`} name='menu' size={24} />
                } */}

              {/* <LucidIcon className={`${styles.menu_icon}`} name='menu' size={24}/> */}

            </button>

            {/* <X/ className={`${styles.close_icon}`}> */}
            {/* <LucidIcon className={`${styles.close_icon}`} name='x' size={24}/> */}
        </div>
        <UserEntrance display={showLoginRegisterBox} closeBtnClick={closeBtnClickHandlar}/>
    </div>
  )
}

export default Header