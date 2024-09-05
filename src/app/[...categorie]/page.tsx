interface CategoriesProps {
    params: {
        categorie: string[]
    }
}

export default function Categorie({ params }: CategoriesProps){
    return <div className="text-white">
        <h1>Votre categorie est {params.categorie[0]}</h1>
    </div>
}