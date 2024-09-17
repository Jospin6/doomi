
type ProductsByCategoryProps = {
    children: React.ReactNode;
}

export const ProductsByCategory = ({children}: ProductsByCategoryProps) => {
    return <>
        <div className="p-2 text-white font-[500]">Beauté</div>
        <div className="w-full px-4 flex h-auto pb-2">
            {children}
        </div>
    </>
}