import { UserProfiles } from '@/src/types/index';
import UserInfo from '../components/UserInfo';
import PlofileCarfd from '../components/ProfileCard';

const dummyProfile: UserProfiles = {
    name: "John Doe",
    age: 28,
    location: "Tokyo, Japan",
    avataUrl: "@/public/avatar.JPG",
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
                <UserInfo
                    name={dummyProfile.name}
                    age={dummyProfile.age}
                    location={dummyProfile.location}
                    avataUrl={dummyProfile.avataUrl}
                />
            </div>
        </div>
    )
}