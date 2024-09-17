"use client"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIsTextHidden } from "@/features/navbarSlice"
export default function Connexion(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setIsTextHidden())
    }, [])
    return <div className="text-white">
        <h1>Connexion</h1>
    </div>
}