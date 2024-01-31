'use client'
import { useState } from 'react'
import styles from './index.module.css'
import { Square, CheckSquare, Plus, ChevronLeft } from 'lucide-react'
// import LucidIcon from '@/components/LucidIcon'
import SwitchBtn from '../SwitchBtn'

const Scope = () => {
    const [entirePlace, setEntirePlace] = useState(true)
    const [privateRoom, setPrivateRoom] = useState(false)


  return (
    <div className=' w-100 absolute-center max-width-1280'>
            <h3 className={`${styles.heading}`}>Basic Information</h3>

            <div className={`${styles.scope_input}`}>
                <h3 className={`${styles.scope_info_question}`}>What can guests book?</h3>

                <div className={`${styles.socps}`}>
                    <div className={`${styles.socpe_item}`}>
                        {
                            entirePlace  
                                
                                ? <CheckSquare className={`${styles.icon} `} size={24}/>
                                : <Square className={`${styles.icon} `} size={24}/>
                        }
                        {/* <LucidIcon name={entirePlace ? 'check-square' :'square'} className={`${styles.icon} `} size={24} /> */}

                        <h3 className={`${styles.scope_title}`}>Entire place</h3>
                        <p className={`${styles.details}`}>Guests have access to the entire place and don’t have to share it with the host or other guests.</p>
                    </div>

                    <div className={`${styles.socpe_item}`}>
                        {
                            privateRoom                                
                                ? <CheckSquare className={`${styles.icon} `} size={24}/>
                                : <Square className={`${styles.icon} `} size={24}/>
                        }
                    
                        {/* <LucidIcon name={privateRoom ? 'check-square' :'square'} className={`${styles.icon} `} size={24} /> */}
                        <h3 className={`${styles.scope_title}`}>A private room</h3>
                        <p className={`${styles.details}`}>Guests can book a room within the property. There are common areas that are shared with either the host or other guests.</p>
                    </div>
                </div>

                <button className={`${styles.add_more_btn}`}> 
                    <Plus className={`${styles.icon} `} size={24}/>
                    {/* <LucidIcon name={'plus'} className={`${styles.icon} `} size={24} /> */}
                    Add more option
                </button>

                <SwitchBtn/>
            </div>

    </div>
  )
}

export default Scope