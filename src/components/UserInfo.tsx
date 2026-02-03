interface UserInfoProps {
    name: string;
    age: number;
    location: string;
    avataUrl: string;
}

export default function UserInfo ({ name, age, location, avataUrl}: UserInfoProps) {
    return (
        <div className="flex flex-col items-center pb-6 border-b border-gray-200 ">
            <img
                src={avataUrl}
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4"
            />
            <div className="text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <span className="text-gray-600">{age}</span>
            </div>
            <p className="text-gray-400 text-sm">{location}</p>
        </div>
    )
}