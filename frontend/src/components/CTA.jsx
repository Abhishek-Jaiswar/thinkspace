import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Users, Globe, Shield } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "No credit card required",
    "5-minute setup",
    "24/7 support",
    "Cancel anytime"
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your blog live in minutes"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join 10,000+ active writers"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Built for worldwide audiences"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-orange-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to start
              <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                your journey?
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of writers who are already building their audience, 
              monetizing their content, and making their mark on the world.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/signup"
              className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105"
            >
              Start Writing Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
              View Pricing
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-xl mb-4 group-hover:bg-orange-500/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-neutral-400 text-sm mb-6">
              Trusted by writers from top companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['TechCrunch', 'Forbes', 'Medium', 'Substack', 'Ghost'].map((company, index) => (
                <div key={index} className="text-white font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
