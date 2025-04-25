import React from 'react';
import { Link } from 'react-router-dom';

export default function ModuleCard({ title, description, icon, path, color = "indigo" }) {
  const colorClasses = {
    indigo: "border-indigo-200 bg-indigo-50 hover:bg-indigo-100",
    amber: "border-amber-200 bg-amber-50 hover:bg-amber-100",
    green: "border-green-200 bg-green-50 hover:bg-green-100",
    blue: "border-blue-200 bg-blue-50 hover:bg-blue-100",
    purple: "border-purple-200 bg-purple-50 hover:bg-purple-100",
    red: "border-red-200 bg-red-50 hover:bg-red-100"
  };

  const iconColorClasses = {
    indigo: "text-indigo-600",
    amber: "text-amber-600",
    green: "text-green-600",
    blue: "text-blue-600", 
    purple: "text-purple-600",
    red: "text-red-600"
  };

  return (
    <Link to={path} className={`block rounded-xl border p-6 shadow-sm transition-all hover:shadow-md ${colorClasses[color]}`}>
      <div className="flex items-start">
        <div className={`rounded-lg p-3 ${iconColorClasses[color]} bg-white`}>
          {icon}
        </div>

        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}