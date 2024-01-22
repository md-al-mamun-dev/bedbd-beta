'use client'
import { useEffect, useRef } from 'react'
import styles from './index.module.css'
// import Image from 'next/image'

const MorePhotoBtn = ({imageGalleryContainerId, moreImageCount}) => {
    const imageGalleryRef = useRef(null);


    const handleImageClick = (element, idx)=>{
        console.log(element)
        console.log(idx)
    }

    useEffect(()=>{
        const imageGallery = document.getElementById(imageGalleryContainerId);
        if (imageGallery) {
            imageGalleryRef.current = imageGallery;
            // console.log(imageGalleryRef)

            // console.log(imageGalleryRef)
            // const children = Array.from(imageGalleryRef.current.children)
            // console.log(children)

            Array.from(imageGalleryRef.current.children).forEach((child, idx) => {
                if(child){
                    // console.log( child.children)
                    const allChildElements = Array.from(child.children)
                    if(allChildElements[0]?.tagName.toUpperCase() === 'IMG'){
                        allChildElements[0].addEventListener('click', () => handleImageClick(allChildElements[0], idx));
                    }
                }
                // child.addEventListener('click', handleClick);
              });
          }
    }, [imageGalleryContainerId])

  return (<button className={`${styles.more_photo_btn}`}>
            +{moreImageCount}
            <div>more<div>Photos</div></div>
        </button>)
}

export default MorePhotoBtn