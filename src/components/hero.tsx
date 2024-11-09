import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck, Receipt, ListPlus, Upload, Clock, Check, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-green-700 uppercase">
              One BYTE against waste
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
              Earn Points, Reduce Waste, Empower your Pantry.
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Be the top food saver of the month to earn rewards. This takes you to the top 14% of the World Population.
            </p>
            <a
              href="/dashboard"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-green-400 rounded-full lg:mt-16 hover:bg-green-300 focus:bg-green-600"
              role="button"
            >
              Get Started
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
            <p className="mt-5 text-gray-600">
              Already joined us?{' '}
              <a
                href="#"
                title=""
                className="text-black transition-all duration-200 hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
          <div>
            <img
              className="w-[200vh] mb-32"
              src="/Screenshot 2024-11-09 162509.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>

      {/* Input Methods Comparison Section */}
      <div className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <InputMethodsComparison />
      </div>
    </div>
  );
};

const InputMethodsComparison = () => {
  const methods = [
    {
      icon: <ClipboardCheck className="w-14 h-14 text-blue-600" />,
      title:  <span className="text-blue-600">Manual Logging</span>,
      description: "Log your food items manually on a daily basis",
      gradient: "from-blue-50 via-white to-blue-50",
      borderColor: "hover:border-blue-400",
      features: [
        { icon: <ListPlus className="w-5 h-5 text-blue-500" />, text: "Add items one by one" },
        { icon: <Clock className="w-5 h-5 text-blue-500" />, text: "Track expiry dates easily" },
        { icon: <Check className="w-5 h-5 text-blue-500" />, text: "Maintain detailed inventory" }
      ]
    },
    {
      icon: <Receipt className="w-14 h-14 text-green-600" />,
      title:  <span className="text-green-600">Receiptify</span>,
      description: "Quick scan or upload of shopping receipts",
      gradient: "from-green-50 via-white to-green-50",
      borderColor: "hover:border-green-400",
      features: [
        { icon: <Upload className="w-5 h-5 text-green-500" />, text: "Instant bulk item upload" },
        { icon: <Clock className="w-5 h-5 text-green-500" />, text: "Save time with automation" },
        { icon: <Check className="w-5 h-5 text-green-500" />, text: "Accurate expiry date tracking" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center space-y-4 mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
          Choose Your Input Method
        </h2>
        <p className="text-gray-600">Select the way that works best for you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {methods.map((method, index) => (
          <div 
            key={index} 
            className="animate-slide-up relative group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <Card className={`h-full transition-all duration-500 border-2 ${method.borderColor} hover:shadow-2xl transform hover:-translate-y-2`}>
              <CardContent className={`p-8 bg-gradient-to-b ${method.gradient}`}>
                <div className="flex flex-col items-center text-center space-y-6 relative">
                  <div className="absolute -top-2 -right-2 animate-pulse">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{method.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{method.description}</p>
                  </div>
                  <div className="w-full space-y-4 pt-4">
                    {method.features.map((feature, fIndex) => (
                      <div 
                        key={fIndex}
                        className="flex items-center space-x-3 text-left p-4 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${(index * 200) + (fIndex * 100)}ms` }}
                      >
                        <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm">
                          {feature.icon}
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center animate-bounce-slow">
          <div className="bg-white shadow-lg rounded-full p-6 z-10 border-2 border-gray-100">
            <span className="text-gray-600 font-bold text-lg">OR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
