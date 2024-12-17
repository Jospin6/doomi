
interface UserData {
    username?: string;
    phone_number?: string;
    password?: string;
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
    value: number;
    label: string;
    ville: string;
    pays: string;
    lat_lon: string;
    flag: string;
    countryCode: string
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

interface ProduitData {
    produit: {
        user_id: number;
        titre: string;
        prix: string;
        devise: string;
        description: string;
        localisation: string;
        sub_categorie_produit_id: string;
        images: any[]; // ou un autre type selon vos besoins
    };
    vehicule?: {
        modele: string | undefined;
        annee: number | undefined;
        kilometrage: string | undefined;
        type_vehicule: string | undefined;
        couleur: string | undefined;
        carburant: string | undefined;
        transmission: string | undefined;
        nombre_portes: string | undefined;
        nombre_places: string | undefined;
        plan_de_paiement: string | undefined;
        disponibilite: string | undefined;
    };
    immobilier?: {
        type_de_bien: string | undefined;
        adresse: string | undefined;
        surface_habitable: string | undefined;
        nombre_chambres: number | undefined;
        nombre_pieces: number | undefined;
    };
    emploi?: {
        type_contrat: string | undefined;
        lieu: string | undefined;
        secteur_activite: string | undefined;
        niveau_experience: string | undefined;
        date_limite: string | undefined;
        site_web: string | undefined;
        formation_requise: string | undefined;
        etat_offre: string | undefined;
    };
    evenement?: {
        date_evenement: string | undefined;
        lieu: string | undefined;
        type_prix: string | undefined;
        site_web: string | undefined;
        etat_evenement: string | undefined;
    };
    vetement_chaussures?: {
        type: string | undefined;
        taille: string | undefined;
        matiere: string | undefined;
    };
    autre_produit?: {
        etat: string | undefined;
        marque: string | undefined;
    };
    service?: {
        statut: string | undefined;
    };
}

type User = {
    id: number
    username: string
}

export interface Item {
    titre: string;
    username: string;
    prix: string;
    location: string;
    date: string;
    image: string;
}

export interface Category {
    [key: string]: Item[];
}

export type Data = Category[];


export type {
    UserData,
    CompteConfirmationData,
    userId,
    City,
    CityState,
    CategorieProduit,
    Produit,
    SubCategorieProduit,
    ProduitData,
    User,
}