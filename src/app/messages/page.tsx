import { ListTile } from "@/components/ListTile";
import { MessageHeader } from "@/components/MessageHeader";
import { IoPaperPlaneOutline, IoSearchOutline } from "react-icons/io5";

export default function Messages() {
    return <div className=" flex w-full text-white">
        <div className="w-[30%] min-h-[100vh] h-auto border-x-[1px] border-[#121212] p-2">
            <div className="flex justify-between h-[45px] items-center text-white">
                <span className="text-[20px] font-[500]"> Messages </span>
                <span className="text-[18px]"><IoSearchOutline /></span>
            </div>

            <div className="mt-4">
                <ListTile />
                <ListTile />
                <ListTile />
            </div>

        </div>

        <div className="w-[70%] relative">
            <MessageHeader />

            <div>
                {/* Messages */}
            </div>
            
            <div className="w-full absolute bottom-0 right-0 h-[80px] px-4">
                <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
                    <input
                        type="text"
                        className="w-[95%] outline-none mr-2 bg-transparent pl-2"
                        placeholder="Message" />
                    <IoPaperPlaneOutline className="text-white cursor-pointer" />
                </div>
            </div>
        </div>

    </div>
}