interface StatsProps {
    followers: string;
    likes: string;
    photos: string
}

export default function Stats({ followers, likes, photos }: StatsProps) {
    return (
        <div className="flex flex-col justify-between mt-4">
            <div className="text-center">
                <p className="text-lg font-bold text-gray-700">総合数理学部</p>
            </div>
            <div className="text-center">
                <p className="text-lg font-bold text-gray-700">先端メディアサイエンス学科</p>
            </div>
        </div>
    )
}