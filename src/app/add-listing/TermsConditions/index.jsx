import SwitchBtn from "../SwitchBtn"
import { useState } from "react";
import LucidIcon from "@/components/LucidIcon";

export default function TermsConditions() {
    const [acceptLegitimateDeclaration, setAcceptLegitimateDeclaration] = useState(false)
    const [acceptReadTermsCondition, setAcceptReadTermsCondition] = useState(false)



  return (
    <div className='w-100 h-max-content absolute-center top-0 max-width-1280 '>
        <div className='max-w-600px mr-l-auto mr-r-auto p-btm-80px p-top-56px'>
            <div className="mr-btm-800">
                <h3 className='clr-primary-400 txt-align-center fw-regular-dark fs-875'>That’s all</h3>
                <p className='txt-align-center fw-regular-dark fs-600 mr-top-16px width-480px'>
                    You’ve done everything you need to before your first guest stays.
                </p>
            </div>
            
            <div className='w-100 grid gap-16px'>
                <div className="grid grid-col-auto-1fr gap-16px">
                    {/* <LucidIcon name='square' size={24}/> */}
                    <button 
                        onClick={e=>setAcceptLegitimateDeclaration(!acceptLegitimateDeclaration)}
                        className=' min-w-24px h-fit-content no-border no-outline bg-transparent cursor-pointer'>
                        <LucidIcon className='opacity-0_70' name={ acceptLegitimateDeclaration ? 'check-square' : 'square' } size={24}/>
                    </button>
                    <p className='fs-200 fw-regular'>I confirm that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. Bedbd.com reserves the right to verify and investigate any details provided in this registration.</p>
                </div>
                <div className="grid grid-col-auto-1fr gap-16px min-h-24px">
                    {/* <LucidIcon name='square' size={24}/> */}
                    <button 
                        onClick={e=>setAcceptReadTermsCondition(!acceptReadTermsCondition)}
                        className=' w-24px h-fit-content no-border no-outline bg-transparent cursor-pointer'>
                        <LucidIcon className='opacity-0_70' name={ acceptReadTermsCondition ? 'check-square' : 'square' }  size={24}/>
                    </button>
                    <p className='fs-200 fw-regular'>I have read, accepted, and agreed to the 
                        <span className='clr-secondary-400'> terms and conditions.</span>
                    </p>
                </div>
                
            </div>
            




            
            {/* nextPage={onContinueBtnClick} previousPage={previousPage}   */}
            <SwitchBtn/>
        </div>
    </div>
  )
}
