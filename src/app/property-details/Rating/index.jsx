import styles from './index.module.css';
import Image from 'next/image';
import LucidIcon from '@/components/LucidIcon';

const Rating = () => {

    const data = {
                     'amenities': 4,
                'communication' : 5,
                     'hygiene'  : 3,
        'Location of Property'  : 1
    }


    const allReviews = []


    // star_primary_color_border.svg

    for (let key in data) {
        if (data.hasOwnProperty(key)){
            allReviews.push(
                <div key={key} className={`${styles.rating_item}`}> {key}
                    <div className={`${styles.rating_stars}`}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <Image className={`${styles.star_icon}`} src={`/icons/${(index < data[key])?'star_primary_color_fill.svg':'star_primary_color_border.svg'}`} height={20} width={20} /> 
                            
                            // index < data[key]
                            //     ?   <Image className={`${styles.star_icon}`} src={`/icons/star_primary_color_fill.svg`} height={20} width={20} /> 
                            //     :   <Image className={`${styles.star_icon}`} src={`/icons/star_primary_color_border.svg`} height={20} width={20} />
                            
                            // index < data[key]
                            //     ?   <Image className={`${styles.star_icon}`} src={`/icons/star_primary_color_fill.svg`} height={20} width={20} /> 
                            //     :   <LucidIcon className={`${styles.star_icon}`} name='star' size={21} color='#FF8515'/>

                            // <LucidIcon className={`${styles.icon}`} name='arrow-right' size={36} color='#FFFFFF'/>
                        ))}
                        <span>{parseFloat(data[key]).toFixed(1)}</span>
                    </div>
                    
                 </div>
            )
        } 
        
    }


    const countCurrentRating = (Object.values(data).reduce((accumulator, currentValue) => (accumulator + currentValue), 0) / Object.keys(data).length).toFixed(1)
    






  return (
    <div className={`${styles.rating}`}>
        <div className={`${styles.title}`}>
            Rating
            <Image className={`${styles.star_icon}`} src='/icons/star_primary_color_fill.svg' height={20} width={20} />    
            <span>  {countCurrentRating} </span> 
            {/* <span>&#40;</span>  <span>&#41;</span> */}
        </div>
        <div className={`${styles.rating_details}`}>
            { allReviews }
        </div>

    </div>
  )
}

export default Rating