import React from 'react';
import { Users, BookOpen, TrendingUp, Globe, Heart, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Writers",
      description: "Growing community of content creators",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: BookOpen,
      number: "50,000+",
      label: "Articles Published",
      description: "High-quality content every day",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      number: "2M+",
      label: "Monthly Readers",
      description: "Engaged audience worldwide",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Global reach and impact",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Satisfaction Rate",
      description: "Writers love our platform",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Average Rating",
      description: "Rated by our community",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Join a thriving
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              community
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            See why thousands of writers choose ThinkSpace to share their stories and build their audience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-neutral-800 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-neutral-600">
                    {stat.description}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Ready to start your journey?
              </h3>
              <p className="text-lg text-neutral-600 mb-8">
                Join thousands of writers who are already building their audience and monetizing their content.
              </p>
              
              {/* Mini Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Free</div>
                  <div className="text-neutral-600">to get started</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5 min</div>
                  <div className="text-neutral-600">setup time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-neutral-600">support available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
