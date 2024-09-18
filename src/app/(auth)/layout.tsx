import Link from "next/link";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="z-10 bg-black absolute top-0 left-0 w-full h-[100vh] text-white">
            <div className='flex justify-center h-[45px] bg-[#121212] w-full'>
                <div className='text-white flex items-center'>
                    <Link href={"/"} className='text-xl font-[500] border-r-[2px] border-white pr-2'>
                        doomi
                    </Link>
                    <span className='text-[14px] pl-2'>Connexion</span>
                </div>
            </div>
            {children}
        </div>
    );
}