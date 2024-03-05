
import LucidIcon from "@/components/LucidIcon"
import SwitchBtn from "../SwitchBtn"
import { useEffect, useState } from "react"
import getAllTimeSegment from "@/components/Utility/getAllTimeSegment"
import useAreaLocation from "@/hooks/useAreaLocation"
import usePropertyDispatch from "@/context/property/usePropertyDispatch"


export default function HomeRules({nextPage, previousPage}) {

    const dispatch = usePropertyDispatch()

    const [timeZone, setTimeZone] =useState('+6')

    const [checkInTime, setCheckInTime] = useState(['',''])
    const [checkOutTime, setCheckOutTime] = useState(['',''])


    const timeSegments = getAllTimeSegment()
    const {localInfo, location} = useAreaLocation()
    // console.log(timeSegments)
    console.log(localInfo)
    console.log(location)

    function chackInStartTime(e) {
        console.log(e.target.value)
    }

    useEffect(()=>{
        let ignore = false
        if(Object.keys(location).length > 0 && !ignore)
            setTimeZone(location['time_zone'])

        return ()=> ignore = true
    }, [location])

    const [homeRules, setHomeRules] = useState([
        {
            ruleName: 'Pet allowed',
            description:'',
            icon: 'not-allowed'
        },
        {
            ruleName: 'Parties/events allowed',
            description:'',
            icon: 'not-allowed'
        },
        {
            ruleName: 'In House Smoking',
            description:'',
            icon: 'not-allowed'
        },
    ])

    function onContinueBtnClick(params) {
        dispatch({type:'property/homeRules', data:homeRules})
        dispatch({type:'property/checkIn', data:checkInTime})
        dispatch({type:'property/checkOut', data:checkOutTime})
    }
  return (
    <div className='w-100 h-max-content absolute-h-center top-0 max-width-1280 '>
        <div className='max-w-600px mr-l-auto mr-r-auto p-btm-80px p-top-56px'>
            <h3 className='mr-btm-48px clr-primary-400 txt-align-center fw-regular-dark fs-875'>Home Rules</h3>
            <div className="">
                <h4 className="fw-regular-dark fs-600 clr-neutral-600">Home Rules</h4>
                <div className="grid gap-16px">
                    {
                        homeRules.map(i=>{
                            let icon = 'square'
                            return (    <div className="flex align-center space-between radius-8 border-neutral-300 p-16px-24px" onClick={()=>{}}>
                                            <p>{i['ruleName']}</p>
                                            <LucidIcon name={icon} size={24} />
                                        </div>)
                                    })
                    }
                </div>
                <button className="flex gap-8px mr-top-14px border-btm-500 no-background cursor-pointer">
                    <LucidIcon name='plus' size={24}/>
                    Add more
                </button>
            </div>
            <div className='mr-top-32px'>
                <div className='w-100'>
                    <h1 className='fs-600 fw-regular-dark clr-neutral-600 '>Check-in (gmt {timeZone})</h1>
                    <div className="flex gap-40px space-between mr-top-8px">
                        <div className="position-relative w-100">
                            <select
                                onChange={e=>setCheckInTime([e.target.value, checkInTime[1]])}
                                className='w-100 p-16px-24px border-neutral-300 radius-8'>
                                {
                                    timeSegments.map(i=>(
                                        <option                                            
                                            value={`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}>
                                                {`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}                                                                                            
                                        </option>))
                                }
                            </select>
                            <LucidIcon className='position-absolute top-50 translateY-50 right-24px ' name='chevron-down' size={24}/>
                        </div>
                        
                        <div className="position-relative w-100">
                            <select 
                                onChange={e=>setCheckInTime([checkInTime[0], e.target.value])}
                                className='w-100 p-16px-24px border-neutral-300 radius-8'>
                                {
                                    timeSegments.map(i=>(
                                        <option value={`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}>{`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}</option>))
                                }                            
                            </select>
                            <LucidIcon className='position-absolute top-50 translateY-50 right-24px ' name='chevron-down' size={24}/>
                        </div>
                    </div>
                </div>
                <div className='w-100 mr-top-16px'>
                    <h1 className='fs-600 fw-regular-dark clr-neutral-600 '>Check-out (gmt {timeZone})</h1>
                    <div className="flex gap-40px space-between mr-top-8px">
                        <div className="position-relative w-100">
                            <select 
                                onChange={e=>setCheckOutTime([e.target.value, checkInTime[1]])}
                                className='w-100 p-16px-24px border-neutral-300 radius-8'>
                                {
                                    timeSegments.map(i=>(
                                        <option value={`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}>{`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}</option>))
                                }                            
                            </select>
                            <LucidIcon className='position-absolute top-50 translateY-50 right-24px ' name='chevron-down' size={24}/>
                        </div>
                        
                        <div 
                            onChange={e=>setCheckOutTime([checkInTime[0], e.target.value])}
                            className="position-relative w-100">
                            <select className='w-100 p-16px-24px border-neutral-300 radius-8'>
                                {
                                    timeSegments.map(i=>(
                                        <option value={`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}>{`${i['hour']}:${i['minute']} ${parseInt(i['hour'])<12 ? 'AM' : 'PM'}`}</option>))
                                }                            
                            </select>
                            <LucidIcon className='position-absolute top-50 translateY-50 right-24px ' name='chevron-down' size={24}/>
                        </div>
                    </div>
                </div>
            </div>  
                     
            <SwitchBtn nextPage={onContinueBtnClick} previousPage={previousPage}/>
        </div>
    </div>
  )
}
