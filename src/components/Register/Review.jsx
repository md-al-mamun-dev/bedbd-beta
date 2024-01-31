import BackBtn from "./BackBtn"

export default function Review() {
  return (
    <>
        <h3 className='clr-primary txt-align-center fs-875 fw-regular-dark '>Review</h3>
        <h3 className='clr-neutral-500 txt-align-center fs-regular fw-regular-dark '>Review your information</h3>
        <form className='mr-l-auto mr-r-auto w-100 max-w-600 grid gap-24 mr-t-24'>
            <input className='w-100 form-input-item' name='id-number' id='id-number' placeholder='ID Number' />
            <input className='w-100 form-input-item' name='user-name' id='user-name' placeholder='Name' />
            <input className='w-100 form-input-item' name='fathers-name' id='fathers-name' placeholder={`Father's Name`} />
            <input className='w-100 form-input-item' name='mothers-name' id='mothers-name' placeholder={`Mother's Name`}  />
            <input className='w-100 form-input-item' name='date-of-birth' id='date-of-birth' placeholder='Date of Birth' />
            <input className='w-100 form-input-item' name='present-address' id='present-address' placeholder='Present Address' />
            <input className='w-100 form-input-item' name='parmanent-address' id='parmanent-address' placeholder='ID Number' />
            <button className='w-100 btn-primary'>Save & Continue</button>
        </form>
        <BackBtn/>
    </>
  )
}
