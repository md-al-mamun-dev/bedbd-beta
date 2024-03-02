'use client'
import { useState } from 'react'
import styles from './index.module.css'
import LucidIcon from '@/components/LucidIcon'
import SwitchBtn from '../SwitchBtn'
import BookingType from './bookingType'
import AddBookingType from './AddBookingType'
import usePropertyDispatch from '@/context/property/usePropertyDispatch'

const SelectBookingType = ({previousPage, nextPage}) => {

    const [addBookingTypModalOpen, setAddBookingTypModalOpen] = useState(false)

    const [bookingTypes, setBookingTypes] = useState([{ id:0,
                                                        title:'Entire place',
                                                        description:'Guests have access to the entire place and don’t have to share it with the host or other guests.'
                                                    },{ id:1,
                                                        title:'A private room',
                                                        description:'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.' }])
    const [selectedTypes, setSelectedTypes] = useState([])                                                        
    const dispatch = usePropertyDispatch()

    function addBookingType(title, description) {
        const maxId = Math.max(...bookingTypes.map(item => item.id));
        setBookingTypes([...bookingTypes, {id:(maxId+1), title, description}])
    }
    
    function addRemoveBookingType(typeTitle) {
        selectedTypes.includes(typeTitle)
            ? setSelectedTypes(selectedTypes.filter(i=>i !== typeTitle))
            : setSelectedTypes([...selectedTypes, typeTitle])
    }

    function onContinueBtnClick() {
        dispatch({type:'property/addBookingType', data: bookingTypes})
        nextPage()
    }


  return (
    <>
        <div className='w-100 absolute-center max-width-1280 '>
            <h3 className={`${styles.heading}`}>Booking Type</h3>

            <div className={`${styles.scope_input}`}>
                <h3 className={`${styles.scope_info_question}`}>What can guests book?</h3>

                <div className={`${styles.socps}`}>
                    {
                        bookingTypes.map(i=><BookingType data={i} isChecked={selectedTypes.includes(i['title'])} toggleSelection={addRemoveBookingType}/>)
                    }
                </div>

                <button className={`${styles.add_more_btn}`} onClick={()=>setAddBookingTypModalOpen(true)}> 
                    <LucidIcon name={'plus'} className={`${styles.icon} `} size={24} />
                    Add more option
                </button>

                <SwitchBtn previousPage={previousPage} nextPage={onContinueBtnClick}/>
            </div>
        </div>

        { addBookingTypModalOpen && <AddBookingType closeModal={()=>setAddBookingTypModalOpen(false)} addBookingType={addBookingType}/>}
    </>    
  )
}

export default SelectBookingType