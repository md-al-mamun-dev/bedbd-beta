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
    <div className={` w-100 min-h-100vh relative`}>
      {/* <div className=' w-100 relative-center max-width-1280'> */}
      {/* <ListingType  /> */}
        {/* <Scope /> */}
        {/* <ViewBasicInfo/> */}
        {/* <DescriptionInput/> */}
        {/* <ImageUpload/> */}
        <SetRent/>
      {/* </div> */}
    {/* <div className={`${styles.contents_container}`}> */}

        
    </div>
  )
}

export default page