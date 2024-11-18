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
export type {
    UserData,
    CompteConfirmationData,
    userId,
    City,
    CityState
}