import React from 'react';
import { MapPin, IndianRupee, Calendar } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  urgent: boolean;
  postedDate: string;
}

export default function JobCard({
  title,
  company,
  location,
  salary,
  urgent,
  postedDate
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
        {urgent && (
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
            Urgent Hiring
          </span>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          {location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <IndianRupee className="h-4 w-4 mr-2" />
          {salary}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          Posted {postedDate}
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Apply Now
      </button>
    </div>
  );
}