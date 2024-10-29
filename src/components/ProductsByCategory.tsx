
type ProductsByCategoryProps = {
    titre: string,
    children: React.ReactNode;
}

export const ProductsByCategory = ({titre, children}: ProductsByCategoryProps) => {
    return <>
        <div className="px-2 text-white font-[500]"> {titre} </div>
        <div className="w-full px-4 flex h-auto pb-2">
            {children}
        </div>
    </>
}