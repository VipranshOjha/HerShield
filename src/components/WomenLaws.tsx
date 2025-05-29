import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const laws = [
  {
    title: "Protection of Women from Domestic Violence Act, 2005",
    description: "Provides protection against domestic violence and includes physical, emotional, verbal, economic, and sexual abuse.",
  },
  {
    title: "Sexual Harassment of Women at Workplace Act, 2013",
    description: "Protects women from sexual harassment at their place of work.",
  },
  {
    title: "Dowry Prohibition Act, 1961",
    description: "Prohibits the giving or taking of dowry at or before or any time after the marriage.",
  },
  {
    title: "The Equal Remuneration Act, 1976",
    description: "Provides for equal payment to men and women workers for same or similar nature of work.",
  },
  {
    title: "Indian Penal Code Section 354",
    description: "Assault or criminal force to woman with intent to outrage her modesty.",
  },
];

export default function WomenLaws() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Women's Rights & Laws</h2>
          </div>

          <div className="space-y-6">
            {laws.map((law, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {law.title}
                </h3>
                <p className="text-gray-600">
                  {law.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">
              Need Legal Help?
            </h3>
            <p className="text-purple-600 text-sm">
              Contact National Commission for Women (NCW)<br />
              Helpline: 1091<br />
              Email: ncw@nic.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}