import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureCard({ title, description, icon, path, color = "indigo" }) {
  const colorClasses = {
    indigo: "border-indigo-200 bg-white hover:bg-indigo-50",
    amber: "border-amber-200 bg-white hover:bg-amber-50",
    green: "border-green-200 bg-white hover:bg-green-50",
    blue: "border-blue-200 bg-white hover:bg-blue-50",
    purple: "border-purple-200 bg-white hover:bg-purple-50",
    red: "border-red-200 bg-white hover:bg-red-50"
  };

  const iconColorClasses = {
    indigo: "text-indigo-600 bg-indigo-100",
    amber: "text-amber-600 bg-amber-100",
    green: "text-green-600 bg-green-100",
    blue: "text-blue-600 bg-blue-100", 
    purple: "text-purple-600 bg-purple-100",
    red: "text-red-600 bg-red-100"
  };

  return (
    <Link to={path} className={`block rounded-lg border p-5 shadow-sm transition-all hover:shadow-md ${colorClasses[color]}`}>
      <div className="flex flex-col items-start">
        <div className={`rounded-full p-2 ${iconColorClasses[color]}`}>
          {icon}
        </div>

        <h3 className="mt-3 text-base font-medium text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
}