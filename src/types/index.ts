export interface SubProfiles {
    faculty: string;
    department: string;
}

export interface UserProfiles {
    name: string;
    age: number;
    location: string;
    avataUrl: string;
    sub: SubProfiles;
}