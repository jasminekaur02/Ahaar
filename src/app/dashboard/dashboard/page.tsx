import React from 'react';
import { Trophy, Star, Award, Target, TrendingUp } from 'lucide-react';
import Dashboard from '@/components/dashboard';
const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
    ${variant === "secondary" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
    {children}
  </span>
);

const BadgeIcon = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
    <Icon className="w-8 h-8 text-green-600 mb-2" />
    <span className="text-sm font-medium text-center">{label}</span>
  </div>
);

const Progress = ({ value }) => (
  <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
    <div 
      className="h-full bg-blue-600 transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);

const DashboardMain = () => {
  const user = {
    name: "Sarah Johnson",
    level: 3,
    points: 750,
    pointsToNextLevel: 1000,
    badges: [
      { id: 1, name: "Food Saver Rookie", icon: Star },
      { id: 2, name: "Waste Warrior", icon: Trophy },
      { id: 3, name: "Green Champion", icon: Award },
    ],
    recentAchievements: [
      "Logged food items for 7 consecutive days",
      "Saved 5 items from expiring",
      "Used 90% of grocery items"
    ]
  };

  const calculateProgress = () => {
    return (user.points / user.pointsToNextLevel) * 100;
  };

  return (
    <div className="space-y-8 p-6">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* User Profile Card */}
        <Card className="flex-1">
          <h2 className="text-xl font-bold mb-4">Profile Overview</h2>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-2xl">{user.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">Level {user.level} Food Saver</p>
            </div>
          </div>
        </Card>

        {/* Points Card */}
        <Card className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5" />
            <h2 className="text-xl font-bold">Points Progress</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">{user.points}</span>
              <span className="text-gray-600">{user.pointsToNextLevel} points to Level {user.level + 1}</span>
            </div>
            <Progress value={calculateProgress()} />
          </div>
        </Card>
      </div>

      {/* Achievements Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Badges Card */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5" />
            <h2 className="text-xl font-bold">Earned Badges</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {user.badges.map((badge) => (
              <BadgeIcon
                key={badge.id}
                icon={badge.icon}
                label={badge.name}
              />
            ))}
          </div>
        </Card>

        {/* Recent Achievements Card */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5" />
            <h2 className="text-xl font-bold">Recent Achievements</h2>
          </div>
          <ul className="space-y-4">
            {user.recentAchievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-3">
                <Badge variant="secondary">+50</Badge>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMain;