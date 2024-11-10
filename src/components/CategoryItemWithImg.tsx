
type CategoryItemWithImgProps = {
    category: string
}

export const CategoryItemWithImg = ({ category }: CategoryItemWithImgProps) => {
    return <div className="w-[120px] h-[80px] rounded-lg mr-2 mb-4 bg-[#121212] shadow">
        <div className="w-full h-[60px] rounded-t-lg bg-green-400"></div>
        <div className="text-white text-[12px] text-center">{category}</div>
    </div>
}