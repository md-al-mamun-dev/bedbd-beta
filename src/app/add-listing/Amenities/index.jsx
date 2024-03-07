import React from 'react'

export default function Amenities() {
  return (
    <div className='w-100 h-max-content absolute-h-center top-0 max-width-1280'>
        <div className='max-w-1280px mr-l-auto mr-r-auto p-btm-80px'>
        <Heading txt='Amenities'/>
            <div className=''>
                

            </div>
            
            <SwitchBtn nextPage={onContinueBtnClick} previousPage={previousPage}/>
        </div>
    </div>
  )
}
