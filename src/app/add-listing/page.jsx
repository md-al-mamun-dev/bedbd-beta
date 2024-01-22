'use client'
import styles from './page.module.css'
import Image from 'next/image'
import ListingType from './ListingType'
import Scope from './Scope'
import ViewBasicInfo from './ViewBasicInfo'
import DescriptionInput from './DescriptionInput'
import ImageUpload from './ImageUpload'
import SetRent from './SetRent'




const page = () => {
  return (
    <div className={`${styles.contents_container}`}>
        {/* <ListingType  /> */}
        {/* <Scope /> */}
        {/* <ViewBasicInfo/> */}
        {/* <DescriptionInput/> */}
        {/* <ImageUpload/> */}
        <SetRent/>
    </div>
  )
}

export default page