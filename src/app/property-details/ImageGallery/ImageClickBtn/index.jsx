"use client"
import { useEffect } from 'react'
import styles from './index.module.css'

const ImageClickBtn =()=> {

    // useEffect(()=>{
    //     console.log(imgId)
    // }, [])
  return (
    <button className={`${styles.image_btn_click}`}/>
  )
}

export default ImageClickBtn