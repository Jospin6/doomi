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

export type {
    UserData,
    CompteConfirmationData,
    userId
}