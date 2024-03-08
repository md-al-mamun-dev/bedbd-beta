import SwitchBtn from "../SwitchBtn"
import { useState } from "react";
import LucidIcon from "@/components/LucidIcon";
import usePropertyDispatch from "@/context/property/usePropertyDispatch";
import accountService from "@/service/AccountService";

export default function TermsConditions({data, nextPage, previousPage }) {
    const [acceptLegitimateDeclaration, setAcceptLegitimateDeclaration] = useState(false)
    const [acceptReadTermsCondition, setAcceptReadTermsCondition] = useState(false)
    const dispatch = usePropertyDispatch()

    async function onContinueBtnClick() {
        dispatch({type:'property/termsCondition', data:{
                                                        legitimateDeclaration:acceptLegitimateDeclaration,
                                                        readTermsCondition:acceptReadTermsCondition
                                                    } })
        // const _LocationData = new FormData()
        // _LocationData.append('latitude', data['location']['lat'])
        // _LocationData.append('longitude', data['location']['lng'])
        console.log(data['images'])
        console.log(typeof data['images'])


        const _formData = new FormData()

        const selectedPropertyType = data['propertyTypes'].find(i => i['id']=== data['selectedPropertyType'])
        const selectedBookingTypes = data['bookingTypes'].filter(i => data['selectedBookingType'].includes(i['id']))
        const selectedPropertyFeatures = data['propertyFeatures'].filter(i => data['selectedPropertyFeatures'].includes(i['id']))
        const selectedAmenities = data['amenities'].filter(i => data['selectedAmenities'].includes(i['id']))



        _formData.append('selectedPropertyType', selectedPropertyType)
        _formData.append('selectedBookingTypes', selectedBookingTypes)
        _formData.append('selectedPropertyFeatures', selectedPropertyFeatures)
        _formData.append('selectedAmenities', selectedAmenities)


        _formData.append('propertyTitle',                       data['title'])
        _formData.append('propertyDescription',                 data['propertyDescription'])
        _formData.append('address',                             data['address'])
        _formData.append('city',                                data['city'])
        _formData.append('country',                             data['country'])
        _formData.append('thana',                               data['thana'])
        _formData.append('timeZone',                            data['timeZone'])
        _formData.append('zipCode',                             data['zipCode'])
        _formData.append('location',                            data['location'])
        _formData.append('ownersDataValidDeclaration',          data['termsConditions']['legitimateDeclaration'])
        _formData.append('readTermsCondition',                  data['termsConditions']['readTermsCondition'])        
        _formData.append('roomCount',                           data['roomCount'])
        _formData.append('bedCount',                            data['bedCount'])
        _formData.append('guestCount',                          data['guestCount'])



        _formData.append('images',                              data['images'])
        _formData.append('currency',                            data['rentInfo']['currency'])
        _formData.append('rent',                                data['rentInfo']['rent'])
        _formData.append('serviceFee',                          data['rentInfo']['serviceFee'])
        _formData.append('tax',                                 data['rentInfo']['tax'])
        _formData.append('checkIn',                             data['availability']['checkIn'])
        _formData.append('monthExtendStay',                     (data['availability']['monthExtendStay'] === 'yes'))
        _formData.append('rebookAfterTimeFrame',                (data['availability']['rebookAfterTimeFrame']=== 'yes'))
        _formData.append('approvingMethod',                     data['approvingMethod'])
        _formData.append('genderPref',                          data['genderPref'])




        // const tokenResult = await accountService.getToken()
        // if(tokenResult){
        //   const token = tokenResult['jwt']
        //   const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/register", {
        //     method: "POST",
        //     headers: {                        
        //       Authorization: `Bearer ${token}`,
        //     },
        //     body: _formData,
        //   })
        // }
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/add-listing", {
            method: "POST",
            headers: {
              Authorization: `Bearer sampleToken`,
            },
            body: _formData,
          })












        // nextPage()
    }

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
            




            
            {/*   */}
            <SwitchBtn nextPage={onContinueBtnClick} previousPage={previousPage} />
        </div>
    </div>
  )
}
