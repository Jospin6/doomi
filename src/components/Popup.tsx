import { useState } from "react"

type PopupProps = {
    handleClose: () => void,
    children: React.ReactNode
}

export const Popup = ({handleClose, children}: PopupProps) => {
    return <div id="myPopup" className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 z-50 max-w-sm w-full">
            <span className="close cursor-pointer text-gray-500" onClick={handleClose}>&times;</span>
            {children}
        </div>
        <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
}