import React from 'react';
import { Briefcase, UserPlus } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
          alt="Construction workers"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empowering Skilled Workers,<br />
          Connecting Them with Opportunities
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl">
          Find reliable, verified blue-collar workers OR get hired for jobs that match your skills.
          Direct hiring, no middlemen, better opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
            <UserPlus className="h-5 w-5 mr-2" />
            Register as a Worker
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
            <Briefcase className="h-5 w-5 mr-2" />
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
}