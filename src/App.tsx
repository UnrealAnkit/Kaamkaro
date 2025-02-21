import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkerCard from './components/WorkerCard';
import JobCard from './components/JobCard';
import { CheckCircle, PhoneCall, Mail, MessageSquare } from 'lucide-react';

const featuredWorkers = [
  {
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80",
    skills: ["Electrician", "Solar Panel Installation"],
    location: "Mumbai, Maharashtra",
    rate: "800",
    rating: 4.8,
    available: true
  },
  {
    name: "Suresh Patel",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80",
    skills: ["Plumbing", "Pipe Fitting"],
    location: "Delhi, NCR",
    rate: "750",
    rating: 4.6,
    available: false
  },
  {
    name: "Priya Singh",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80",
    skills: ["Carpentry", "Furniture Making"],
    location: "Bangalore, Karnataka",
    rate: "900",
    rating: 4.9,
    available: true
  }
];

const latestJobs = [
  {
    title: "Experienced Electrician Needed",
    company: "BuildRight Construction",
    location: "Pune, Maharashtra",
    salary: "800-1000 per day",
    urgent: true,
    postedDate: "2 hours ago"
  },
  {
    title: "Plumber for Residential Project",
    company: "Home Solutions Ltd",
    location: "Hyderabad, Telangana",
    salary: "750-900 per day",
    urgent: false,
    postedDate: "1 day ago"
  },
  {
    title: "Construction Workers Required",
    company: "Metro Builders",
    location: "Chennai, Tamil Nadu",
    salary: "600-800 per day",
    urgent: true,
    postedDate: "3 hours ago"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Featured Workers Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Workers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorkers.map((worker, index) => (
            <WorkerCard key={index} {...worker} />
          ))}
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Job Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Direct Hiring</h3>
              <p className="text-gray-600">No middlemen, direct connection with workers</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">All workers and employers are verified</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and transparent payment system</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fair Wages</h3>
              <p className="text-gray-600">Better opportunities and fair compensation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <PhoneCall className="h-6 w-6 text-blue-600 mr-2" />
              <span>+91 1800-123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              <span>support@kaamkaro.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Find Workers</a></li>
                <li><a href="#" className="hover:text-blue-400">Post a Job</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Workers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Create Profile</a></li>
                <li><a href="#" className="hover:text-blue-400">Find Jobs</a></li>
                <li><a href="#" className="hover:text-blue-400">Safety Tips</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Post Jobs</a></li>
                <li><a href="#" className="hover:text-blue-400">Hiring Guide</a></li>
                <li><a href="#" className="hover:text-blue-400">Verification</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-blue-400">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 KaamKaro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;