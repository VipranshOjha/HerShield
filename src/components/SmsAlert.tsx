import React, { useState } from 'react';
import { ArrowLeft, Send, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmsAlert() {
  const [location, setLocation] = useState('');
  const [sending, setSending] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude}, ${longitude}`);
      });
    }
  };

  const sendAlert = async () => {
    setSending(true);
    // Simulate sending alert
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSending(false);
    alert('Emergency alert sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Alert</h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm">
                Clicking the button below will send an emergency alert with your current location
                to all your emergency contacts.
              </p>
            </div>

            <div>
              <button
                onClick={getLocation}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Current Location
              </button>
              {location && (
                <p className="mt-2 text-sm text-gray-600">
                  Location: {location}
                </p>
              )}
            </div>

            <button
              onClick={sendAlert}
              disabled={sending}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
            >
              <Send className="w-5 h-5 mr-2" />
              {sending ? 'Sending Alert...' : 'Send Emergency Alert'}
            </button>

            <div className="mt-4">
              <h3 className="font-medium text-gray-800 mb-2">Alert will include:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Your current location</li>
                <li>Pre-defined emergency message</li>
                <li>Your personal details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}