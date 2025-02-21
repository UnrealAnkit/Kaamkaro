import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

interface WorkerCardProps {
  name: string;
  image: string;
  skills: string[];
  location: string;
  rate: string;
  rating: number;
  available: boolean;
}

export default function WorkerCard({
  name,
  image,
  skills,
  location,
  rate,
  rating,
  available
}: WorkerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt={name}
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
          available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {available ? '🟢 Available' : '🔴 Busy'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium text-gray-900">{rating}</span>
          </div>
          <div className="text-sm font-medium text-gray-900">
            ₹{rate}/day
          </div>
        </div>
      </div>
    </div>
  );
}