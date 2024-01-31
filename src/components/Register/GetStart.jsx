import BackBtn from "./BackBtn"

export default function GetStart() {
  return (
    <>
          <h3 className='clr-primary txt-align-center fs-875 fw-regular-dark'>Get Start</h3>
          <form className='clr-neutral-500 fs-regular fw-regular-dark flex flex-col gap-24 mr-top-800 mr-btm-800'>
              <div>
                  <input className='form-input' placeholder='Name ( auto )'/>
              </div>
              <div>
                  <input className='form-input' placeholder='Phone'/>
              </div>
              <div>
                  <input className='form-input' placeholder='Email'/>
              </div>
          </form>
          <button className='btn-primary w-100'>Continue</button>          
          <BackBtn/>
      </>
  )
}
