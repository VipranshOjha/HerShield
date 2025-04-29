import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  {
    title: "Basic Self-Defense Techniques",
    description: "Learn fundamental moves to protect yourself in dangerous situations",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    youtubeId: "KVpxP3ZZtAc"
  },
  {
    title: "Escape from Grabs",
    description: "Essential techniques to break free from different types of grabs",
    thumbnail: "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80",
    youtubeId: "T7aNSRoDCmg"
  },
  {
    title: "Street Safety Awareness",
    description: "Learn to identify and avoid potentially dangerous situations",
    thumbnail: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?auto=format&fit=crop&w=800&q=80",
    youtubeId: "9qTAHj1xZ7k"
  }
];

export default function SelfDefense() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Self Defense Training</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 rounded-lg p-6">
            <h3 className="font-semibold text-purple-800 mb-2">
              Important Safety Tips
            </h3>
            <ul className="list-disc list-inside text-purple-600 space-y-2">
              <li>Always be aware of your surroundings</li>
              <li>Trust your instincts</li>
              <li>Keep emergency contacts readily available</li>
              <li>Practice these techniques regularly</li>
              <li>Consider joining a local self-defense class</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}