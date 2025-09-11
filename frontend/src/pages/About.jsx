import React from 'react';
import { Users, Target, Heart, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower every writer with the tools they need to share their voice, build their audience, and make a meaningful impact through their words.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A world where every story matters, every voice is heard, and every writer has the platform they need to thrive and succeed.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Our Community",
      description: "We believe in the power of community. Our platform brings together writers from all backgrounds to learn, grow, and support each other.",
      color: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Writers" },
    { number: "2M+", label: "Monthly Readers" },
    { number: "50,000+", label: "Articles Published" },
    { number: "150+", label: "Countries" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former product manager at Medium, passionate about empowering writers."
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Ex-Google engineer, building the future of content creation."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer focused on creating beautiful user experiences."
    },
    {
      name: "David Kim",
      role: "Head of Growth",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Growth expert helping writers reach their full potential."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                ThinkSpace
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We're on a mission to democratize content creation and help writers 
              around the world share their stories, build their audience, and make 
              a living doing what they love.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-orange-100 text-lg">Numbers that tell our story</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The passionate people behind ThinkSpace, working every day to make 
              content creation better for writers everywhere.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-orange-100 group-hover:border-orange-300 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed">
            <p className="text-xl mb-6">
              ThinkSpace was born from a simple observation: the internet is full of 
              incredible stories, but most writers struggle to find the right platform 
              to share them and build an audience.
            </p>
            <p className="mb-6">
              Founded in 2023 by a team of former Medium and Substack employees, 
              we set out to create a platform that combines the best of both worlds: 
              the beautiful, distraction-free writing experience that writers love, 
              with powerful monetization and community-building tools.
            </p>
            <p className="mb-6">
              Today, we're proud to serve over 10,000 writers from 150+ countries, 
              helping them reach millions of readers and build sustainable careers 
              from their writing.
            </p>
            <p>
              But we're just getting started. Our vision is to become the go-to 
              platform for anyone who wants to share their thoughts with the world, 
              whether they're writing their first blog post or running a media empire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to join our community?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Start your writing journey today and become part of the ThinkSpace family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;