export interface SubProfiles {
    followers: string;
    likes: string;
    photos: string;
}

export interface UserProfiles {
    name: string;
    age: number;
    location: string;
    avataUrl: string;
    sub: SubProfiles;
}