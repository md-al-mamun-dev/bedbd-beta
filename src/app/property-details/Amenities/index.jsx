import styles from './index.module.css'
import Image from 'next/image'
import LucidIcon from '@/components/LucidIcon'
import ShowAllBtn from './ShowAllBtn'

const Amenities = ({data}) => {
    const amenitiesContainerId = 'all-amenities'
    const renderAmenities = 
        data.map(
            (item, index)=> (                                    
                                <div className={`${styles.amenity_item} `}>
                                    {
                                        item.icon.type.includes('lucidicon') 
                                            ? <LucidIcon className={`${styles.amenities_icon}`} name={ item['icon']['name']} size={24} />
                                            : <Image src={item['icon']['link']} className={`${styles.amenities_icon_image}`} height={24} width={24}/>
                                    }
                                    <div className={`${styles.amenities_title}`}>{item.title}</div>
                                </div>
                            )
            )


  return (
    <div className={`${styles.amenities}`}>
        <h3 className={`${styles.title}`}>Offered Amenities</h3>
        <div id={amenitiesContainerId}>{renderAmenities}</div>
        {data.length > 6 && <ShowAllBtn contentContainerId={amenitiesContainerId} itemCount={data.length}/>}
    </div>
    )
}

export default Amenities