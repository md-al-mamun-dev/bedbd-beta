'use client'
import { useState } from 'react'
import styles from './index.module.css'
import { Square, CheckSquare, Plus, ChevronLeft } from 'lucide-react'
import Image from 'next/image'

const SwitchBtn = () => {
  return (
    <div className={`${styles.switch_btn_grp}`}>
      <button className={`${styles.btn} ${styles.step_back_btn}`} >
      <ChevronLeft size={24} className='clr-primary-400' />
      {/* <LucidIcon name='chevron-left'className={`clr-primary-400 ${styles.icon}`} size={24} /> */}
            Back</button>
      <button className={`${styles.btn} ${styles.continue_btn}`} >Continue</button>
    </div>)
}

export default SwitchBtn