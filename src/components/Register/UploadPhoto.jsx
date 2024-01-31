import React from 'react'
import LucidIcon from '../LucidIcon'
import BackBtn from './BackBtn'

export default function UploadPhoto() {

    const docType = ''
    return (
        <>
            <h3 className='clr-primary txt-align-center fs-875 fw-regular-dark '>Upload Document</h3>
            <div className='w-100 max-w-386 mr-l-auto mr-r-auto mr-t-48'>
                <select className='w-100 border-neutral-250 fs-regular fw-regular-dark clr-neutral-500 p-12-24 radius-6 bg-transparent' name="doc-type" id="doc-type" required>
                    <option value="" > Select document type </option>
                    <option value="nid">National ID</option>
                    <option value="passport">Passport</option>
                    <option value="driving_license">Driving License</option>
                </select>
                <div className='h-232 mr-top-32 mr-btm-40 radius-8 p-62-68 border-dashed-1 grid gap-10 justify-items-center cursor-pointer'>
                    <LucidIcon name='upload' size={24} />
                    <button className='radius-8 w-146 h-40 fs-regular fw-regular-dark clr-neutral-600 bg-secondary-050 border-neutral-300' >Browse</button>
                    <h3 className='clr-neutral-400 fs-200 fw-regular txt-align-center'>
                        Or drag and drop photo of the <span className='clr-neutral-500 fw-regular-dark'>Front Part</span> of your NID card
                    </h3>
                </div>  
                <button className='w-100 max-w-386 mr-l-auto mr-r-auto btn-primary'>Save & Continue</button>
            </div>   
            <BackBtn/>         
        </>
    )
}
