import usePropertyFeatures from '@/hooks/usePropertyFeatures'
import React from 'react'
import PropertyFeature from './PropertyFeature'
import SwitchBtn from '../SwitchBtn'


export default function PropertyDetails() {

    const {isLoading, propertyFeatures} = usePropertyFeatures()
    if(!isLoading)
        console.log(propertyFeatures)


    // const [propertyFeatures, setPropertyFeatures] = useState([{ id:0,
    //                                                             title:'Shared Bathroom',
    //                                                             description:'Guests have access to the entire place and don’t have to share it with the host or other guests.'
    //                                                         },{ id:1,
    //                                                             title:'Beach View',
    //                                                             description:'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.' }])


  return (
    <div className='w-100 h-max-content absolute-h-center top-0 max-width-1280 '>
        <div className='max-w-600px mr-l-auto mr-r-auto p-btm-80px p-top-56px'>
            <div className=' mr-btm-36px'>
                <h3 className=' clr-primary-400 txt-align-center fw-regular-dark fs-875'>Property Details</h3>
                <div className='w-100'>
                    <label className='w-100 fs-600 fw-regular-dark'>Property Title</label>
                    <input className='w-100 fs-regular mr-top-16px clr-neutral-500 border-neutral-500 p-16px-24px radius-8' type='text' placeholder="pls give a title "/>
                    <div className='fs-200 p-l-24 mr-t-6px'>Choose a catchy title in 40 characters</div>
                </div>
            </div>
            

            <div className='mr-btm-40px'>
                <div className='w-100 fs-600 fw-regular-dark '>Property Features</div>
                <p className='fw-regular fs-200 clr-neutral-500'>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : propertyFeatures.map( i => <PropertyFeature data={i}  isChecked={true} toggleSelection={()=>{console.log('a')}} />)
                }

                <button className=' w-100 clr-primary-400 mr-top-24px txt-align-center no-border no-background cursor-pointer'>Show All </button>
                {/* <div className=''>
                    <input className='w-100 fs-regular clr-neutral-500 border-neutral-500 p-16px-24px radius-8' type='text' placeholder="pls give a title "/>
                    <div className='fs-200 p-l-24 mr-t-6px'>Choose a catchy title in 40 characters</div>
                </div> */}
            </div>
            <div className='mr-btm-40px'>
                <h3 className='fw-regular-dark fs-600 clr-neutral-600'>Property Description</h3>
                <textarea className='w-100 min-h-120px p-16px-24px radius-8 border-neutral-300' placeholder='description is optional '/>
            </div>
            <SwitchBtn/>
        </div>        
    </div>
  )
}
