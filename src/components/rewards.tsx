import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Check, Star, Gift, TrendingUp } from 'lucide-react';

const RewardsSection = () => {
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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center"> {/* Full white background */}
      <div className="w-full max-w-3xl mx-auto p-6">
        <Card className="bg-gradient-to-br from-white to-blue-50/30 border shadow-sm">
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-semibold text-blue-600">
                    🎉 Voilà!
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Earn up to <span className="text-blue-600 text-3xl">20</span> points
                  </h2>
                  <p className="text-gray-600">
                    on every item logged & used before expiry
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm"
                  >
                    {step.icon}
                    <span className="text-gray-700">{step.text}</span>
                  </div>
                ))}
              </div>

              {/* Bonus */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
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
    </div>
  );
};

export default RewardsSection;
