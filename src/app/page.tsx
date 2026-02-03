import { UserStats, UserProfiles } from '@/src/types/index';

const dummyProfile: UserProfiles = {
    name: "John Doe",
    age: 28,
    location: "Tokyo, Japan",
    avataUrl: "https://example.com/avatar.jpg",
    stats: {
        followers: "1.2K",
        likes: "3.4K",
        photos: "150"
    }
}

export default function Page() {
    return (
        <div className="flex min-h-screen bg-cyan-100 items-center justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
                <h1 className="text-2xl font-bold">{dummyProfile.name}</h1>
            </div>
        </div>
    )
}