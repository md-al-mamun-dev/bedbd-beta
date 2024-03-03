import { useEffect, useState } from "react"
import listingService from "@/service/ListingService"
import usePropertyDispatch from "@/context/property/usePropertyDispatch"
// import veri from "@/service/DatabaseService";
// import userVerificationService from "@/service/UserVerificationService";


export default function usePropertyFeatures(){
    const [isLoading, setisLoading] = useState(false)
    const [propertyFeatures, setPropertyFeatures] = useState([])
    const dispatch = usePropertyDispatch()
    useEffect(()=>{
        let ignore = false
        async function getPropertyFeatures(){
            if(!ignore){
                setisLoading( ()=> true)
                try {
                    const data =  await listingService.getPropertyFeatures()
                    if(data){
                        setPropertyFeatures( ()=> data)
                        dispatch({ type:'property/addFeatures', data:data })
                            setisLoading( ()=> false )
                    }
                } catch (error) {
                    setisLoading( ()=> false )
                }                
            }
        }
        getPropertyFeatures()
    return ()=> ignore = true
    }, [])
    return {isLoading, propertyFeatures};
}