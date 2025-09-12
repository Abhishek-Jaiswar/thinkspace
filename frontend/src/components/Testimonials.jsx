import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Writer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "ThinkSpace transformed my writing workflow. The editor is intuitive, the themes are beautiful, and I've grown my audience by 300% in just 6 months.",
      rating: 5,
      highlight: "300% audience growth"
    },
    {
      name: "Marcus Johnson",
      role: "Travel Blogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The monetization features are game-changing. I'm now earning a full-time income from my travel blog thanks to ThinkSpace's subscription tools.",
      rating: 5,
      highlight: "Full-time income"
    },
    {
      name: "Emily Rodriguez",
      role: "Food Blogger",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The community features helped me build a loyal following. My readers love the comment system and newsletter integration. It's like having a built-in fanbase.",
      rating: 5,
      highlight: "Loyal following"
    },
    {
      name: "David Kim",
      role: "Business Writer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The analytics dashboard gives me insights I never had before. I can see exactly what content resonates and optimize my strategy accordingly.",
      rating: 5,
      highlight: "Data-driven insights"
    },
    {
      name: "Lisa Thompson",
      role: "Lifestyle Blogger",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Setting up my blog was incredibly easy. The templates are gorgeous and the mobile experience is flawless. My readers always compliment the design.",
      rating: 5,
      highlight: "Gorgeous design"
    },
    {
      name: "Alex Morgan",
      role: "Fitness Writer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The SEO tools are fantastic. My articles now rank much higher in search results, bringing in organic traffic I never had before.",
      rating: 5,
      highlight: "Better SEO rankings"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4" />
            <span>What our writers say</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Loved by writers
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real writers are saying about their experience with ThinkSpace.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-200 group-hover:text-orange-300 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-neutral-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className=" bg-gradient-to-br from-neutral-900 via-neutral-800 to-orange-900 relative overflow-hidden rounded-3xl p-8 text-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <h3 className="text-2xl font-bold mb-4">
              Ready to join them?
            </h3>
            <p className="text-orange-100 mb-6 text-lg">
              Start your writing journey today and see why thousands of writers choose ThinkSpace.
            </p>
            <button className="group inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
