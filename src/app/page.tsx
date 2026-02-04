import { UserProfiles } from '@/src/types/index';
import UserInfo from '../components/UserInfo';
import UserStats from '@/src/components/Stats';
import PlofileCarfd from '../components/ProfileCard';

const dummyProfile: UserProfiles = {
    name: "Seiichiro Maruyama",
    age: 19,
    location: "Tokyo, Japan",
    avataUrl: "/avatar.png",
    sub: {
        faculty: "総合数理学部",
        department: "先端メディアサイエンス学科",
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
                <UserStats
                    faculty={dummyProfile.sub.faculty}
                    department={dummyProfile.sub.department}
                />
            </div>
        </div>
    )
}