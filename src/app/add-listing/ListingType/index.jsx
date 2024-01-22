'use client'
import styles from './index.module.css'
import Image from 'next/image'

const ListingType = () => {
    const apartmentTypes = [
        {
            id:0,
            name:"Apartment",
            icon:"icon_apartment.svg"
        },
        {
            id: 1,
            name:"House",
            icon:"icon_house.svg"
        },
        {
            id:2,
            name:"Shard Room",
            icon:"icon_shared_room.svg"
        },
        {
            id: 3,
            name:"Condons",
            icon:"icon_condos.svg"
        },
        {
            id: 4,
            name:"Villa",
            icon:"icon_villa.svg"
        },
        {
            id: 5,
            name:"Farmhouse",
            icon:"icon_farmhouse.svg"
        }
    ]


  return (
    <div className={`contents`}>
            <h3 className={`${styles.heading}`}>Basic Information</h3>

            <p className={`${styles.sub_heading}`}>List your property on bedbd.com and welcoming guests in a matter of moments!</p>

            <div className={`${styles.listing_type}`}>
                <p className={`${styles.instruction_info}`}>To begin, choose the type of property you'd like to list on bedbd.com</p>
                <div className={`${styles.listing_type_items}`}>
                    {
                        apartmentTypes.map(typ=>(<div className={`${styles.listing_type_item}`}>
                                                    <div className={`${styles.item_icon_wrapper}`}>
                                                        <Image src={`/icons/${typ.icon}`} fill objectFit='contain' />
                                                    </div>
                                                    <h4 className={`${styles.listing_type_name}`}>{typ.name}</h4>
                                                </div>))
                    }
                </div>


                <button className={`${styles.btn} ${styles.continue_btn}`}>Continue</button>
                

            </div>

        </div>
  )
}

export default ListingType