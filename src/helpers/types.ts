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

export type {
    UserData,
}