import styles from './index.module.css'
import MorePhotoBtn from './MorePhotoBtn'
import AnImage from './AnImage'


const ImageGallery = ({ data, totalImageCount}) => {
const imageViewLimit = 4
// const imageUrlPrefix = ''
const imageGalleryContainerId = 'image-gallery'
const imageDetailContainerId = 'img_details'
const imageIdPrefix = 'gallery_img_'

  return (
    <div id={imageGalleryContainerId} className={`${styles.image_gallery}`}>        
        {
            data.map( async (imgData, idx)=> { 
                const imageId =  imageIdPrefix+idx
                return <AnImage key={idx} imgDetailContainerId={imageDetailContainerId} imgId={imageId} data={imgData} />})
        }
        <MorePhotoBtn imgIdPrefix='detail_image_' imageDetailContainerId={imageDetailContainerId}  moreImageCount={totalImageCount-imageViewLimit}/>       
    </div>
    )
}

export default ImageGallery