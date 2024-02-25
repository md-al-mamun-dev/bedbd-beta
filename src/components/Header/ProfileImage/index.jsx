'use client'
import styles from './index.module.css'
import Image from 'next/image'

const ProfileImage = ({logInBtnHandlar, user, isLoggedIn}) => { 

  return (
    isLoggedIn
            ? <div className={`position-relative round box-shadow-primary  ${styles.profile_image}`}>
                <Image alt='user image' className='round border-primary-1 padding-0' src={'/images/sample-profile-photo.jpg'} height={48} width={48}/>
              </div>
            : <button onClick={logInBtnHandlar} className={`capitalize fw-slightly-dark no-decoration fs-regular ${styles.login_btn}`} href="#">log in</button>
        )
}

export default ProfileImage