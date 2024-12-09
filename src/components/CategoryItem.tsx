
type CategoryItemProps = {
    title: string,
    isActive?: boolean,
    className?: string,
    onClick?: () => void // Ajout de la prop onClick
}

export const CategoryItem = ({ title, isActive = false, className, onClick }: CategoryItemProps) => {
    let style = "h-[100%] text-[14px]";
    
    return (
        <button
            onClick={onClick} // Ajout de l'événement onClick
            className={!isActive
                ? `${style} text-gray-500 hover:text-white ${className} hover:border-b-[4px] hover:border-[#D14318]`
                : `text-white border-b-[4px] ${className} border-[#D14318] ${style}`}>
            {title}
        </button>
    );
};