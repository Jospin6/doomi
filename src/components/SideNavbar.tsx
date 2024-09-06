import { ListTile } from "./ListTile"
import { MainButton } from "./MainButton"
import { MenuItem } from "./MenuItem"
import Link from 'next/link'
import { 
    IoCalendarOutline, 
    IoChatboxOutline, 
    IoGridOutline, 
    IoHeartOutline, 
    IoHomeOutline, 
    IoNotificationsOutline, 
    IoSearchOutline, 
    IoStorefrontOutline 
} from "react-icons/io5"

export const SideNavbar = () => {
    return <div className="h-[100vh] px-2">
        <div className="font-[600] w-full text-white text-[20px] h-[100px] flex items-center pl-2">
            doomi
        </div>
        <Link href={"/"}><MenuItem title="Home"><IoHomeOutline /></MenuItem></Link>
        <Link href={"/mes_recherches"}><MenuItem title="Search"><IoSearchOutline /></MenuItem></Link>
        <Link href={"/favoris"}><MenuItem title="Favory"><IoHeartOutline /></MenuItem></Link>
        <Link href={"/notifications"}><MenuItem title="Notifications"><IoNotificationsOutline /></MenuItem></Link>
        <Link href={"/messages"}><MenuItem title="Messages"><IoChatboxOutline /></MenuItem></Link>
        <Link href={"/"}><MenuItem title="Categories"><IoGridOutline /></MenuItem></Link>
        <Link href={"/evenements"}><MenuItem title="Evenements"><IoCalendarOutline /></MenuItem></Link>
        <Link href={"/ma_vitrine"}><MenuItem title="Mon e-vitrine"><IoStorefrontOutline /></MenuItem></Link>       
        <MainButton text="Publier" className="py-2 mt-4 text-[12px]" />
        <ListTile />
    </div>
}