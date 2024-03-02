import React from 'react'

export default function PropertyDetails() {
  return (
    <div className='w-100 h-max-content absolute-center max-width-1280 '>
        <div className='max-w-600px mr-l-auto mr-r-auto '>
            <div className=' mr-btm-36px'>
                <h3 className=' clr-primary-400 txt-align-center fw-regular-dark fs-875'>Property Details</h3>
                <div className='w-100'>
                    <label className='w-100 fs-600 fw-regular-dark'>Property Title</label>
                    <input className='w-100 fs-regular mr-top-16px clr-neutral-500 border-neutral-500 p-16px-24px radius-8' type='text' placeholder="pls give a title "/>
                    <div className='fs-200 p-l-24 mr-t-6px'>Choose a catchy title in 40 characters</div>
                </div>
            </div>
            

            <div className=''>
                <div className='w-100 fs-600 fw-regular-dark mr-btm-16px'>Property Features</div>

                <div className=''>
                    <input className='w-100 fs-regular clr-neutral-500 border-neutral-500 p-16px-24px radius-8' type='text' placeholder="pls give a title "/>
                    <div className='fs-200 p-l-24 mr-t-6px'>Choose a catchy title in 40 characters</div>
                </div>
            </div>
        </div>        
    </div>
  )
}
