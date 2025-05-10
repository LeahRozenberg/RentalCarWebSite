import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "../redux/Actions"
import { getUser } from "../redux/api"
import { UserCard } from "./Cards"
import React, { useState } from "react"

export const Users = () => {
    const dispatch = useDispatch()
    const [users,setUsers1]=useState([])
    React.useEffect(() => {
        getUser().then((res)=>{
        console.log(res.data);  
        setUsers1(res.data)})
        dispatch(setUsers(users))
        console.log(users)    
    }, [])
    return <>
    <h1>users</h1>
        {users.length>0 && users.map(u => <UserCard user={u}></UserCard>)}
    </>
}