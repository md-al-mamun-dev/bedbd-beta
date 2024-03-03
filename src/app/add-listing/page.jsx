'use client'
import styles from './page.module.css'
import Image from 'next/image'
import ListingType from './ListingType'
import Scope from './SelectBookingType'
import SelectBookingType from './SelectBookingType'
import ViewBasicInfo from './ViewBasicInfo'
import DescriptionInput from './DescriptionInput'
import ImageUpload from './ImageUpload'
import SetRent from './SetRent'
import PropertyProvider from '@/context/property/propertyContext'
import { useState } from 'react'
import useProperty from '@/context/property/useProperty'
import PropertyDetails from './PropertyDetails'
import PropertyLocation from './PropertyLocation'




const AddListing = () => {
const [pageState, setPageState] = useState('select-property-type')

  return (
    <PropertyProvider>
      <div className={` w-100 min-h-100vh relative`}>
      <div className=' w-100 relative-center max-width-1280'>
        {/* { pageState === 'select-property-type' && <ListingType nextPage={()=>setPageState('property-type-confirmation')} />} */}
        {/* { pageState === 'property-type-confirmation' && <ViewBasicInfo previousPage={()=>setPageState('select-property-type')}  nextPage={()=>setPageState('select-booking-type')}/>} */}
        {/* { pageState === 'select-booking-type' && <SelectBookingType previousPage={()=>setPageState('property-type-confirmation')} nextPage={()=>setPageState('property-details')} />} */}

        {/* { pageState === 'select-booking-type' && <SelectBookingType previousPage={()=>setPageState('property-type-confirmation')} nextPage={()=>setPageState('property-details')} />} */}

        {/* { pageState === 'property-type' && <ViewBasicInfo previousPage={()=>setPageState('select-booking-type')} nextPage={()=>setPageState('scope')} />} */}

        {/* { pageState === 'scope' && <Scope nextPage={()=>setPageState('scope')} />} */}
        {/* <Scope nextPage={()=>setPageState('scope')} /> */}

        <PropertyDetails/>

        {/* <PropertyLocation/> */}
        {/* <DescriptionInput/> */}
        {/* <ImageUpload/> */}
        {/* <SetRent/> */}
      </div>
    {/* <div className={`${styles.contents_container}`}> */}

        
    </div>
    </PropertyProvider>    
  )
}

export default AddListing