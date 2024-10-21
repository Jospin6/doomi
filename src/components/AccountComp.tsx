import { IoLogOut } from "react-icons/io5"

type AccountCompProps = {
    text: string,
    children: React.ReactNode
}

export const AccountComp = ({text, children}: AccountCompProps) => {
    return <div className="border-[1px] border-[#121212] text-gray-500 rounded-lg p-4 w-[200px] ">
        <div className="text-[25px]">{children}</div>
        <div className="text-[14px]">{text}</div>
    </div>
}