/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";
import Link from 'next/link'


interface TutorCardProps {
  id: string;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  hourlyRate: number;
  featured?: boolean;
}

function TutorCard({
  id,
  name,
  avatar,
  subjects,
  rating,
  hourlyRate,
  featured,
}: TutorCardProps) {
  return (
    <Link href={`/tutors/${id}`} className="block rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-2 left-2 px-2 py-1 text-xs bg-blue-600 text-white rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-2 right-2 px-2 py-1 text-sm bg-white bg-opacity-80 rounded font-medium">
          ${hourlyRate}/hr
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center gap-1 mt-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-700 font-medium">{rating.toFixed(1)}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {subjects.slice(0, 3).map((subject) => (
            <span key={subject} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {subject}
            </span>
          ))}
          {subjects.length > 3 && (
            <span className="text-xs border border-gray-300 px-2 py-1 rounded text-gray-600">
              +{subjects.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default TutorCard;