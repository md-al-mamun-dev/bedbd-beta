"use client"

import { useState } from "react"
import LucidIcon from "../LucidIcon"
import BackBtn from "./BackBtn"

export default function TermsCondition() {
    const [showAllTearms, setShowAllTearms] = useState(false)
    const [isAgree, setIsAgree] = useState(false)


    const tearmsAndCondition = [
                                    {
                                        id:0,
                                        name:'',
                                        description:'Lorem ipsum dolor sit amet consectetur. Sit vitae semper nam amet integer. Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
                                    }, {
                                        id:1,
                                        name:'',
                                        description:'Fermentum ornare vulputate condimentum massa quis. Sit mi nisl hac orci dolor proin scelerisque lacus. Augue pellentesque sed ornare sit.',
                                    }, {
                                        id:2,
                                        name:'',
                                        description:'Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
                                    },{
                                        id:3,
                                        name:'',
                                        description:'Lorem ipsum dolor sit amet consectetur. Sit vitae semper nam amet integer. Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
                                    }, {
                                        id:4,
                                        name:'',
                                        description:'Fermentum ornare vulputate condimentum massa quis. Sit mi nisl hac orci dolor proin scelerisque lacus. Augue pellentesque sed ornare sit.',
                                    }, {
                                        id:5,
                                        name:'',
                                        description:'Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
                                    }
                                ]

  return (
        <>
            <h3 className='clr-primary txt-align-center fs-875 fw-regular-dark '>Terms & Conditions</h3>
            <ul className='clr-neutral-620 fs-regular fw-regular line-height-32 flex flex-col gap-14 numbered-items mr-t-48'>
                {
                    tearmsAndCondition.map((item, idx) => <li key={item['id']} className={`p-l-24 ${(idx>2 && !showAllTearms) && 'display-none'}`}>{item['description']}</li>)
                }
                <button className='btn-secondary w-180 relative left-224 cursor-pointer' onClick={()=>setShowAllTearms(!showAllTearms)}> {!showAllTearms ? 'Read More' : 'Show less'} </button>

                <button className="mr-top-700 w-fit-content cursor-pointer relative bg-transparent no-border no-outline margin-left-24" onClick={()=>setIsAgree(!isAgree)}>
                    <LucidIcon className='absolute-v-center position-left-outside-24'  name={`${ isAgree ? 'check-square' :'square' }`} size={24}/>
                    I agree with the terms and conditions
                </button>

                <button className="btn-primary w-100 mr-top-32">Continue</button>
            </ul>
            <BackBtn/>
        </>
  )
}
