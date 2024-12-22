
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
    user_id: number;
    titre: string;
    prix: string;
    devise: string;
    description: string;
    localisation: string;
    sub_categorie_produit_id: string;
    images: any[]; // ou un autre type selon vos besoins
    // VEHICULE
    modele?: string;
    annee?: number;
    kilometrage?: string;
    type_vehicule?: string;
    couleur?: string;
    carburant?: string;
    transmission?: string;
    nombre_portes?: string;
    nombre_places?: string;
    plan_de_paiement?: string;
    disponibilite?: string;
    // IMMOBILIER
    type_de_bien?: string;
    adresse?: string;
    surface_habitable?: string;
    nombre_chambres?: number;
    nombre_pieces?: number;
    // EMPLOI
    type_contrat?: string;
    lieu?: string;
    secteur_activite?: string;
    niveau_experience?: string;
    date_limite?: string;
    site_web?: string;
    formation_requise?: string;
    etat_offre?: string;
    // EVENEMENTS
    date_evenement?: string;
    // lieu?: string;
    type_prix?: string;
    // site_web?: string;
    etat_evenement?: string;
    // VETEMENTS
    type?: string;
    taille?: string;
    matiere?: string;
    // AUTRES PRODUITS
    etat?: string;
    marque?: string;
    // SERVICES
    statut?: string;
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