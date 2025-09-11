import React from 'react';
import { 
  PenTool, 
  Palette, 
  Smartphone, 
  DollarSign, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  Globe,
  Heart,
  Target
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: PenTool,
      title: "Beautiful Writing Experience",
      description: "Focus on your content with our distraction-free editor. Rich formatting, markdown support, and real-time preview.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Palette,
      title: "Customizable Themes",
      description: "Choose from dozens of professionally designed themes or create your own. Make your blog truly yours.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Your content looks perfect on every device. Responsive design ensures great reading experience everywhere.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Monetization Tools",
      description: "Turn your passion into profit with built-in subscription models, paywalls, and affiliate marketing tools.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Engage with your readers through comments, newsletters, and social features. Build a loyal following.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your growth with detailed analytics. See what content resonates and optimize your strategy.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your content is protected with enterprise-grade security. Full control over your data and privacy.",
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with global CDN and optimized performance. Your readers get instant page loads.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built-in SEO tools help your content rank higher in search results. Reach more readers organically.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Everything you need to succeed</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Powerful features for
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              modern bloggers
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From writing your first post to building a thriving community, 
            ThinkSpace provides all the tools you need to create, grow, and monetize your blog.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Heart className="w-5 h-5" />
            <span>Start your blog today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
