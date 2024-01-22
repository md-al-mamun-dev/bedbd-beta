import styles from './index.module.css'
import Image from "next/image"
import ImageClickBtn from "./ImageClickBtn"

const AnImage = async ({ imgDetailContainerId, imgId, data}) => {
  const imgSrc = await import(`@/../public${data['imageUrl']}`)
  const imgIdArr = imgId.split('_')
  return (
        <div className={`${styles.image_wrapper}`}>
            <Image id={imgId} src={imgSrc}/> 
            <ImageClickBtn imageId={imgIdArr[imgIdArr.length - 1]} imgDetailContainerId={imgDetailContainerId} />
        </div>
  )
} 

export default AnImage