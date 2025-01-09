import { CategoryItem } from "./CategoryItem"

type CategoriesProps = {
  isHidden?: boolean
}

export const Categories = ({ isHidden }: CategoriesProps) => {
  return <div className={!isHidden ? `h-[44px] flex items-center justify-between` : `hidden`}>
    <CategoryItem title="Tous" isActive={true} />
    <CategoryItem title="Produits"  />
    <CategoryItem title="Services" />
    <CategoryItem title="Evenements" />
    <CategoryItem title="Emplois" />
  </div>
}