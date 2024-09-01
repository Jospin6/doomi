import { ListTile } from "./ListTile"
import { MainButton } from "./MainButton"
import { MenuItem } from "./MenuItem"
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
        <MenuItem title="Home"><IoHomeOutline /></MenuItem>
        <MenuItem title="Search"><IoSearchOutline /></MenuItem>
        <MenuItem title="Favory"><IoHeartOutline /></MenuItem>
        <MenuItem title="Notifications"><IoNotificationsOutline /></MenuItem>
        <MenuItem title="Chat"><IoChatboxOutline /></MenuItem>
        <MenuItem title="Categories"><IoGridOutline /></MenuItem>
        <MenuItem title="Evenements"><IoCalendarOutline /></MenuItem>
        <MenuItem title="Mon e-vitrine"><IoStorefrontOutline /></MenuItem>
        <MainButton text="Publier" className="py-2 mt-4" />
        <ListTile />
    </div>
}