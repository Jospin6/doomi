
type AuthCompProps = {
    children: React.ReactNode,
    hTitle?: string,
    hSubTitle?: string
}

export const AuthComp = ({children, hTitle, hSubTitle}: AuthCompProps) => {
    return <div className='w-[350px] min-h-[400px] h-auto bg-[#121212] m-auto rounded-lg mt-[50px]  relative'>
    <div className='text-center mb-4'>
        <p className='text-2xl text-white py-4'>{hTitle}</p>
        <p className='text-[12px] text-gray-500'> {hSubTitle}</p>
    </div>
    {children}
</div>
}