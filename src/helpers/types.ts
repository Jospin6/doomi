interface User {
    username?: string;
    email?: string;
    phone_number?: string;
    password?: string;
    type_account?: 'particulier' | 'entreprise'; 
}

interface UserData {
    user: User;
    ville?: string;
    pays?: string;
    lat_lon?: string;
}

interface userId {
    id: number
}

interface CompteConfirmationData {
    user_id: number,
    confirmation_code: string
}

interface City {
    ville: string;
    pays: string;
    lat_lon: string;
}
  
interface CityState {
    cities: City[];
    selectedCity: City | null;
    pays: string;
    loading: boolean;
    error: string | null;
}

interface user {
    id: number,
    username: string,
    image: string
}

interface Produit {
    id: number;
    titre: string;
    prix: number,
    devise: string,
    vendeur: string;
    image: string;
    location: string;
    description: string;
    date: string;
    user: user
}

interface SubCategorieProduit {
    produits: Produit[];
}

interface CategorieProduit {
    id: number;
    titre: string;
    sub_categorie_produits: SubCategorieProduit[];
}
export type {
    UserData,
    CompteConfirmationData,
    userId,
    City,
    CityState,
    CategorieProduit,
    Produit,
    SubCategorieProduit
}