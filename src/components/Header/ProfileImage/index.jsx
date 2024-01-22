'use client'
import styles from './index.module.css'
import Image from 'next/image'
import { Menu, X , } from 'lucide-react'
import { useState } from 'react'


const ProfileImage = ({logInBtnHandlar}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  return (
        isLoggedIn
            ? <div className={`position-relative round box-shadow-primary  ${styles.profile_image}`}><Image className='round border-primary-1 padding-0' src={'/images/sample-profile-photo.jpg'} height={48} width={48}/></div>
            : <div> <button onClick={logInBtnHandlar} className={`capitalize fw-slightly-dark no-decoration fs-regular ${styles.login_btn}`} href="#">log in</button> </div>
        )
}

export default ProfileImage