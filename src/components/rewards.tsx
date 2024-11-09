'use client'

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Check, Star, Gift, TrendingUp } from 'lucide-react';

const RewardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      text: "Log items before expiry"
    },
    {
      icon: <Check className="w-5 h-5 text-green-500" />,
      text: "Use items on time"
    },
    {
      icon: <Star className="w-5 h-5 text-orange-400" />,
      text: "Earn points instantly"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isVisible) return null; // Do not render if not visible

  return (
    <div className="fixed bottom-5 right-5 z-50"> {/* Positioning the popup */}
      <Card className="bg-gradient-to-br from-white to-blue-50 border shadow-sm">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-semibold text-blue-600 pt-4">
                  🎉 Voilà!
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  Earn up to <span className="text-blue-600 text-2xl">20</span> points
                </h2>
                <p className="text-gray-600">
                  on every item logged & used before expiry
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 gap-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-2 flex items-center gap-2 shadow-sm"
                >
                  {step.icon}
                  <span className="text-gray-700">{step.text}</span>
                </div>
              ))}
            </div>

            {/* Bonus */}
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Gift className="w-5 h-5 text-purple-500" />
                <span className="font-medium">Bonus:</span>
                <span>Complete streaks to multiply your points!</span>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsSection;