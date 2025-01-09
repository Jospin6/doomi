"use client"
import { IoSearchOutline } from "react-icons/io5"
import { Categories } from "./Categories"
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/features/store";
import { searchProduits } from "@/features/produits/produitsApi"
import { useState } from "react";
import { search } from "@/data";

type SearchBarProps = {
    isHidden?: boolean,
}

export const SearchBar = ({ isHidden = false }: SearchBarProps) => {
    const dispatch = useDispatch<AppDispatch>()

    const initialValues = {
        title: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (data) => {
            dispatch(searchProduits(data.title))
        },
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredWords, setFilteredWords] = useState<any[]>([]);

    const handleInputChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        // Recherche dynamique
        if (value) {

            const resultsSet = new Set(); // Utiliser un ensemble pour éviter les doublons

            search.forEach((category) => {
                Object.keys(category).forEach((key) => {
                    // Vérifie si le mot tapé correspond à la clé
                    if (key.toLowerCase().includes(value)) {
                        category[key].forEach((item) => resultsSet.add(item.titre));
                    }
                    // Vérifie si le mot tapé est dans les titres
                    category[key].forEach((item) => {
                        if (item.titre.toLowerCase().includes(value)) {
                            resultsSet.add(item.titre);
                        }
                    });
                });
            });

            // Convertir l'ensemble en tableau
            setFilteredWords(Array.from(resultsSet));

        } else {
            setFilteredWords([]);
        }
    };

    return <div className="h-auto border-b-[1px] border-[#121212] w-full px-2 relative">
        <div className="w-full h-[auto] relative">
            <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
                <form onSubmit={formik.handleSubmit} className="w-full">
                    <input
                        type="text"
                        className="w-[95%] text-gray-200 outline-none mr-2 bg-transparent pl-2"
                        placeholder="Rechercher sur doomi"
                        value={searchTerm}
                        onChange={handleInputChange} // Gestion de la saisie
                    />
                    <button><IoSearchOutline className="text-white cursor-pointer" /></button>
                </form>
            </div>

            {/* Boîte de suggestion positionnée au-dessus */}
            <div className="absolute top-[45px] h-[auto] left-0 w-full rounded-lg shadow-lg bg-white z-50">
                {filteredWords.length > 0 ? (
                    <ul>
                        {filteredWords.map((word, index) => (
                            <li key={index} className="px-4 py-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer">
                                {word}
                            </li>
                        ))}
                    </ul>
                ) : (
                    searchTerm && (
                        <p className="px-4 py-2 text-gray-500">Aucun résultat trouvé</p>
                    )
                )}
            </div>
        </div>

        <Categories isHidden={isHidden} />
    </div>
}