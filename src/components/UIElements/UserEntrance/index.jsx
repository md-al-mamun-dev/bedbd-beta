'use client'
import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { ChevronDown, Mail, X } from 'lucide-react'
import Image from 'next/image'
// import LucidIcon from '@/components/LucidIcon'

const UserEntrance = ({display, closeBtnClick}) => {
const [countryCodeOptionOpened, setCountryCodeOptionOpened] = useState(false)
const [selectedCountryCode, setSelectedCountryCode]  = useState('')
const [selectedCountryCodeValue, setSelectedCountryCodeValue]  = useState('')
const toggleCountryCodeOption = ()=> setCountryCodeOptionOpened(!countryCodeOptionOpened)
const [phoneNumberValue, setPhoneNumberValue] = useState('');



const selectCountryCodeOption = (e)=> {
  setSelectedCountryCodeValue(e.target.value)
  setSelectedCountryCode(e.target.text)
}
const handleInputPhoneNumberChange = (event) => {
  // Allow only digits and limit the input to 11 digits
  const newValue = event.target.value.replace(/\D/, '').slice(0, 11);
  setPhoneNumberValue(newValue);
};
// text code
// useEffect(()=>{
//   console.log(selectedCountryCode)
//   console.log(selectedCountryCodeValue)
// }, [selectedCountryCode, selectedCountryCodeValue])

  return (
    <div className={`${styles.overlay}  ${display ? 'display-static' : 'display-none' }   `}>
      <div className={`${styles.entrance_box}`}>
        <div className={`${styles.container}`}>

          <div className={`${styles.title_bar}`}>
                <h3 className={`${styles.title_txt}`} >Login or Signup</h3>
                <X onClick={closeBtnClick} className={`${styles.close_icon}`} size={24}/>
                {/* <LucidIcon className={`${styles.close_icon}`} color="#000" name='x'/> */}
          </div>

          <div className={`${styles.phone_input}`}>
              <div className={`${styles.country_code}`}>
                <label>Country</label>
                <div className={`${styles.select_country_code}`} onClick={toggleCountryCodeOption}>                    
                  <div className="custom-select" id="customSelect" onClick="toggleDropdown()">
                    {selectedCountryCode === '' || countryCodeOptionOpened ? 'Select Code' : selectedCountryCode}
                  </div>
                  <div 
                    className={`${styles.country_code_options} ${countryCodeOptionOpened ? 'display-block' : 'display-none'  }  `} 
                    id="phone_code"
                    onClick={selectCountryCodeOption}>
                    <option value="+1">{`BD(+880`}</option>
                    <option value="+2">{`BD(+881`}</option>
                    <option value="+3">{`BD(+882`}</option>
                    <option value="+4">{`BD(+883`}</option>
                    <option value="+1">{`BD(+880`}</option>
                    <option value="+2">{`BD(+881`}</option>
   
                  </div>
                  <ChevronDown  className={`${styles.dropdown_icon}`} color='#484848' />


                  {/* <button className={`${styles.dropdown_btn}`}> */}
                    {/* <LucidIcon className={`${styles.dropdown_icon}`} color="#000" name='chevrondown'/> */}
                    {/* <ChevronDown  className={`${styles.dropdown_icon}`} color='#484848' /> */}
                  {/* </button> */}
                </div>                  
              </div>


              <div className={`${styles.contact_number}`}>
                <label>Phone Number</label>

                <input placeholder='Enter Your Number' type='number'  maxlength="11" onChange={handleInputPhoneNumberChange} value={phoneNumberValue} />
              </div>
          </div>

          <h4 className={`${styles.info_txt}`}>
            We’ll call or text you to confirm your number. Standard message and data rates apply.
          </h4>

          <div className={`${styles.cta}`}>
            <button className={`${styles.continue_btn}`}>Continue</button>
            <button className={`${styles.continue_mail}`}>
              <Mail />
              {/* <LucidIcon className={`${styles.close_icon}`} color="#000" name='mail'/> */}
              Continue With Email              
            </button>
          </div>

          <div className={`${styles.alternative_access}`}>
            <h4 >Or Continue With</h4>
            <div className={`${styles.access_btns}`}>
              <div className={`${styles.btn}`}>
                <div className={`${styles.btn_icon_wrapper}`}>
                  <Image src={'/icons/google_colored.png'}  fill />
                </div>
                Google
              </div>
              <div className={`${styles.btn}`}>
                <div className={`${styles.btn_icon_wrapper}`}>
                  <Image src={'/icons/fb_colored.png'}  fill />
                </div>
                Facebook
              </div>
              <div className={`${styles.btn}`}>
                <div className={`${styles.btn_icon_wrapper}`}>
                  <Image src={'/icons/apple_colored.png'}  fill />
                </div>
                Apple ID
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default UserEntrance