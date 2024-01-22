'use client'
import { useState } from 'react'
import styles from './index.module.css'
import { Square, CheckSquare, Plus, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import SwitchBtn from '../SwitchBtn'

const ViewBasicInfo = () => {


  const icon = 'icon_house.svg'

  const scopes = [ 'Entire place', 'A private room' ]
  const brifingText = `An entire home where guests can book the entire place or a single room.`




  return (
    <div className={`contents text-select-none`}>
        <h3 className={`${styles.heading}`}>You're Listing</h3>
        <div className={`${styles.icon_wrapper}`}>
          <Image src={`/icons/${icon}`} fill objectFit='contain'/>
        </div>

        <h3 className={`${styles.brifing_txt}`}>{brifingText}</h3>

        <h4 className={`${styles.approval_question}`}>Sounds good?</h4>

        <SwitchBtn/>
    </div>
            
  )
}

export default ViewBasicInfo