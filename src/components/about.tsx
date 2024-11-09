import React from 'react';
import { Box, Bell, Handshake, LineChart, Star, ScanLine, Apple } from 'lucide-react';

const features = [
  { icon: <Box className="text-green-600" size={32} />, title: "Pantry Tracking", description: "Keep track of your pantry items easily." },
  { icon: <Bell className="text-yellow-500" size={32} />, title: "Expiry Notifications", description: "Get alerts for items nearing expiration." },
  { icon: <Handshake className="text-blue-500" size={32} />, title: "Grocery Sharing", description: "Share groceries to minimize waste." },
  { icon: <LineChart className="text-purple-500" size={32} />, title: "Waste Histories", description: "View records of thrown, shared, or consumed food." },
  { icon: <Star className="text-pink-500" size={32} />, title: "Points System", description: "Earn points by reducing food waste." },
  { icon: <ScanLine className="text-red-500" size={32} />, title: "AI Integration", description: "Scan receipts & import items automatically." },
];

const Infographic: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full mb-12 bg-white py-10 px-5">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">How Ahaar Works?</h1>
      
      {/* Center Icon */}
      {/* <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-8">
        <Apple className="text-green-600" size={48} />
        <h2 className="text-center font-bold text-gray-800">Too Good To Waste</h2>
      </div> */}

      {/* Surrounding Features */}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-12 w-3/4 rounded-xl border-[3px] p-4 border-green-500">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg text-center"
          >
            {feature.icon}
            <h3 className="mt-2 font-semibold text-lg text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infographic;