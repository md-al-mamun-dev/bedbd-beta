import { useEffect, useState } from "react"
import { Jwt } from "jsonwebtoken";
import { account } from "@/service/config";

import useAccountDispatch from "@/context/account/useAccountDispatch";
// import { useAccountDispatch } from "@/context/account/accountContext";
// import { useDispatch } from "react-redux";
// import { userLoggedIn } from "../features/auth/authSlice";

import accountService from "@/service/AccountService";


export default function useAuthCheck(){
    // const [user, setUser] =useState({})
    const [authCheck, setAuthChecked] = useState(false);

    const dispatch = useAccountDispatch()
    useEffect(()=>{
        let ignore = false

        const cookies = document.cookie;

    console.log('Cookies:', cookies);

        async function getUserAccount() {
            if(!ignore){
                const userData =  await accountService.getCurrentUser()
                if(userData)
                    dispatch({ type:'login', data:userData })
                setAuthChecked(true)
            }
        }
        getUserAccount() //async call
        return ()=> ignore = true
    }, [])
    return authCheck;
}