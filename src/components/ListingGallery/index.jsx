import styles from './index.module.css'
import Image from 'next/image'
// import listingItem from '../UIElements/ListingItem'
import ListingItem from '../UIElements/ListingItem'


async function getData() {
  
  const res = await fetch(process.env.API_URL + '/api/property', { method: 'GET' })

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const ImageGallery = async () => {

  // GET property Data
  const data = await getData()
  console.log(data)

  const galleryTitle = 'Top Rated Properties'



  
  return (
    <div className={`z-index-1 full-width-container position-relative  ${styles.listing_gallery_container}`}>
      <div className='horizontal-center w-fit-content'>
        {galleryTitle &&  <div className={`${styles.title_container}`}>
                          <h2 className={`${styles.gallery_title}`}>{galleryTitle}</h2>
                        </div>}

        <div className={`${styles.listing_gallery} `}>
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          {/* <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem />
          <ListingItem /> */}
        </div>
      </div>      
    </div>
  )
}
export default ImageGallery