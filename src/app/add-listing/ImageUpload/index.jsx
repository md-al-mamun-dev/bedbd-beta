'use client'
import { useState } from 'react'
import styles from './index.module.css'
import { X, CheckSquare, Plus, ChevronLeft } from 'lucide-react'
// import LucidIcon from '@/components/LucidIcon'
import SwitchBtn from '../SwitchBtn'
import Image from 'next/image'

const ImageUpload = () => {

  return (
    <div className=' w-100 relative left-50 max-width-1280 p-btm-80'>
        <h3 className={`${styles.heading}`}>Upload Images</h3>

        <div className={`text-select-none ${styles.upload_photo}`}>
            <p className={`${styles.proposition_txt}`}>Drag and drop or</p> 
            <button className={`${styles.upload_btn}`}>
                <Plus className={`${styles.upload_btn} `} size={24} />
                {/* <LucidIcon name={'plus'} className={`${styles.upload_btn} `} size={24} /> */}
                Upload photos
            </button>

            <p className={`${styles.suggestion_txt}`}>jpg/jpeg or png, maximum 5MB each</p>
        </div> 

        <div className={`${styles.uploaded_images} `}>

            <p className={`${styles.info}`}>Arrange the photos in the desired order by clicking and dragging them for guests to view.</p>
            <div className={`${styles.image_wrapper}`}>
                <Image src={`/images/${'4eabfbe482568e48247e3a0119a702ca.jpeg'}`} fill/>
                <button className={`${styles.drop_img_btn}`}>
                    <X size={24} className={`${styles.close_icon}`}/>
                    {/* <LucidIcon name={'x'} className={`${styles.close_icon} `} size={24} /> */}
                </button>
            </div>

            <div className={`${styles.image_wrapper}`}>
                <Image src={`/images/${'dab98b8e77b48c65d7c3e2032f00af6c.jpeg'}`} fill/>
                <button className={`${styles.drop_img_btn}`}>
                    <X size={24} className={`${styles.close_icon}`}/>
                    {/* <LucidIcon name={'x'} className={`${styles.close_icon} `} size={24} /> */}
                </button>
            </div>

            <div className={`${styles.image_wrapper}`}>
                <Image src={`/images/${'edd4ba000bdfa85be11654df3de4ccf3.jpeg'}`} fill/>
                <button className={`${styles.drop_img_btn}`}>
                    <X size={24} className={`${styles.close_icon}`}/>
                    {/* <LucidIcon name={'x'} className={`${styles.close_icon} `} size={24} /> */}
                </button>
            </div>

            <div className={`${styles.image_wrapper}`}>
                <Image src={`/images/${'ff4537db926dfeb0067a37eecda96e8f.jpeg'}`} fill/>
                <button className={`${styles.drop_img_btn}`}>
                    <X size={24} className={`${styles.close_icon}`}/>
                    {/* <LucidIcon name={'x'} className={`${styles.close_icon} `} size={24} /> */}
                </button>
            </div>

            <div className={`${styles.image_wrapper}`}>
                <Image src={`/images/${'ff4537db926dfeb0067a37eecda96e8f.jpeg'}`} fill/>
                <button className={`${styles.drop_img_btn}`}>
                    <X size={24} className={`${styles.close_icon}`}/>
                    {/* <LucidIcon name={'x'} className={`${styles.close_icon} `} size={24} /> */}
                </button>
            </div>        
        </div>

        <SwitchBtn/>

    </div>
  )
}

export default ImageUpload