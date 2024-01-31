'use client'
import { useState } from "react"
import React from 'react'
import TermsCondition from "./TermsCondition"
import UploadPhoto from "./UploadPhoto"
import Review from "./Review"
import LastWords from "./LastWords"
// import LucidIcon from "../LucidIcon"
import BackBtn from "./BackBtn"
import GetStart from "./GetStart"

export default function Register() {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')

  return (
    <div className='w-100v h-100v relative '>
        <div className='bg-secondary-050 w-814 min-h-640 absolute-center radius-8 p-56-106 '>
            <GetStart/>
            {/* <TermsCondition/> */}
            {/* <UploadPhoto/> */}
            {/* <Review/> */}
            {/* <LastWords/> */}
        </div>
    </div>
  )
}
