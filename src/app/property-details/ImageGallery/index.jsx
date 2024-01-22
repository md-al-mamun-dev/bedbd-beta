import styles from './index.module.css'
import MorePhotoBtn from './MorePhotoBtn'
import ImageClickBtn from './ImageClickBtn'
import Image from 'next/image'


const ImageGallery = ({ data, totalImageCount}) => {

const imageViewLimit = 4
const imageUrlPrefix = ''
const imageGalleryContainerId = 'image-gallery'

// const imagesArray = data.map( async (imgData, idx)=>{ 
//                 const imageId = `gallery_img_${idx}`
//                 return (<div id={imageId} className={`${styles.image_wrapper}`}>
//                             <Image layout='fill' src={await import(`@/../public${imgData['imageUrl']}`)}/> 
//                             <ImageClickBtn imageId={imageId} />
//                         </div>)})

  return (
    <div id={imageGalleryContainerId} className={`${styles.image_gallery}`}>        
        {
            data.map( async (imgData, idx)=>{ 
                const imageId = `gallery_img_${idx}`
                return (<div id={imageId} className={`${styles.image_wrapper}`}>
                            <Image layout='fill' src={await import(`@/../public${imgData['imageUrl']}`)}/> 
                            <ImageClickBtn imageId={imageId} />
                        </div>)})
            // imagesArray.map((img, idx)=>{
            //     const imageId = `gallery_img_${idx}`
            //     return  <div id={imageId} className={`${styles.image_wrapper}`}>
            //                 {img}
            //                 <ImageClickBtn imageId={imageId} />
            //             </div>
            // })
        }
        <MorePhotoBtn imageGalleryContainerId={imageGalleryContainerId}  moreImageCount={totalImageCount-imageViewLimit}/>       
    </div>
    )
}

export default ImageGallery