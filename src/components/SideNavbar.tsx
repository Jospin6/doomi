"use client"
import { ListTile } from "./ListTile"
import { MainButton } from "./MainButton"
import { MenuItem } from "./MenuItem"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/store'
import {
    IoBriefcaseOutline,
    IoCalendarOutline,
    IoChatboxOutline,
    IoHeartOutline,
    IoHomeOutline,
    IoNotificationsOutline,
    IoSearchOutline,
    IoStorefrontOutline
} from "react-icons/io5"
import useCurrentUser from "@/hooks/useCurrentUser"
import { setIsTextHidden } from "@/features/navbarSlice"
import { logout } from '@/features/users/userApi'


export const SideNavbar = () => {
    const isNavbarTextHidden = useSelector((state: RootState) => state.navbar.isTextHidden)
    const dispatch = useDispatch<AppDispatch>()
    const user = useCurrentUser()

    const handleDeconnexion = () => {
        dispatch(logout())
        dispatch(setIsTextHidden(true))
    }

    return <div className={isNavbarTextHidden ? "hidden" : `h-[100vh] px-2`}>
        <div className="font-[600] w-full text-white text-[20px] h-[100px] flex items-center pl-2">
            doomi
        </div>
        <Link href={"/"}><MenuItem title="Home"><IoHomeOutline /></MenuItem></Link>
        <Link href={"/recherches"}><MenuItem title="Search"><IoSearchOutline /></MenuItem></Link>
        <Link href={"/favoris"}><MenuItem title="Favory"><IoHeartOutline /></MenuItem></Link>
        <Link href={"/notifications"}><MenuItem title="Notifications"><IoNotificationsOutline /></MenuItem></Link>
        <Link href={"/messages"}><MenuItem title="Messages"><IoChatboxOutline /></MenuItem></Link>
        <Link href={"/evenements"}><MenuItem title="Evenements"><IoCalendarOutline /></MenuItem></Link>
        <Link href={"/emplois/3"}><MenuItem title="Emplois"><IoBriefcaseOutline /></MenuItem></Link>
        <Link href={"/ma_vitrine/1"}><MenuItem title="Ma vitrine"><IoStorefrontOutline /></MenuItem></Link>
        <Link href={"/nouveau"}><MainButton text="Publier" className="py-2 mt-4 w-full text-[12px]" /></Link>
        {
            !user?.username ? (
                <Link href={"/connexion"} onClick={handleDeconnexion}>
                    <ListTile className=" mt-8 hover:bg-[#121212]" lettre="C" titre="Connexion" sousTitre="" />
                </Link>
            ) : (
                <Link href={"/compte"}>
                    <ListTile className=" mt-8 hover:bg-[#121212]" lettre={user!.username.charAt(0).toUpperCase()} titre={user!.username} sousTitre="personnel" />
                </Link>
            )
        }

    </div>
}