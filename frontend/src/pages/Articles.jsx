import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, User, Clock, Heart, BookOpen, TrendingUp, Star, Eye, Share2, Bookmark, ArrowRight, Sparkles } from 'lucide-react';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  const categories = ['All', 'Technology', 'Travel', 'Food', 'Lifestyle', 'Business', 'Design'];

  const posts = [
    {
      id: 1,
      title: "Building a Modern Bento Grid Layout with React and Tailwind CSS",
      excerpt: "Discover how to design a clean and responsive Bento Grid layout using React and Tailwind CSS. This guide walks you through creating visually appealing image cards, gradient overlays, and structured content blocks.",
      author: "Abhishek Jaiswar",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Technology",
      date: "12 July 2025",
      readTime: "20 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      likes: 124,
      views: 2847,
      rating: 4.9,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "The Complete Guide to Travel Photography: From Beginner to Pro",
      excerpt: "Learn the essential techniques, equipment, and mindset needed to capture stunning travel photos that tell compelling stories and preserve your memories forever.",
      author: "Sarah Chen",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "Travel",
      date: "10 July 2025",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
      likes: 89,
      views: 1923,
      rating: 4.7,
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: "Mastering the Art of Italian Cuisine: A Culinary Journey",
      excerpt: "Explore the rich traditions, techniques, and secrets of Italian cooking. From perfect pasta to authentic risotto, discover how to bring the flavors of Italy to your kitchen.",
      author: "Marco Rossi",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Food",
      date: "8 July 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop",
      likes: 156,
      views: 1567,
      rating: 4.8,
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: "The Future of Remote Work: Trends and Predictions for 2025",
      excerpt: "As remote work becomes the new normal, we explore the latest trends, tools, and strategies that are shaping the future of how we work and collaborate.",
      author: "Emily Rodriguez",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Business",
      date: "6 July 2025",
      readTime: "18 min read",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
      likes: 203,
      views: 3456,
      rating: 4.9,
      featured: true,
      trending: true
    },
    {
      id: 5,
      title: "Minimalist Design Principles: Less is More in the Digital Age",
      excerpt: "Discover how minimalist design principles can improve user experience, increase conversion rates, and create more meaningful digital products.",
      author: "David Kim",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      category: "Design",
      date: "4 July 2025",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      likes: 97,
      views: 1234,
      rating: 4.6,
      featured: true,
      trending: false
    },
    {
      id: 6,
      title: "Sustainable Living: Small Changes, Big Impact",
      excerpt: "Learn practical tips and strategies for living more sustainably. From reducing waste to choosing eco-friendly products, discover how small changes can make a big difference.",
      author: "Lisa Thompson",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      category: "Lifestyle",
      date: "2 July 2025",
      readTime: "16 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
      likes: 178,
      views: 2100,
      rating: 4.7,
      featured: false,
      trending: true
    },
    {
      id: 7,
      title: "The Psychology of Color in Web Design",
      excerpt: "Understanding how colors affect user behavior and emotions can significantly improve your website's conversion rates and user experience.",
      author: "Dr. Alex Chen",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Design",
      date: "1 July 2025",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      likes: 145,
      views: 1890,
      rating: 4.8,
      featured: true,
      trending: false
    },
    {
      id: 8,
      title: "Building Resilience: A Guide to Mental Health",
      excerpt: "Practical strategies for developing mental resilience and maintaining emotional well-being in challenging times.",
      author: "Dr. Maria Santos",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "Lifestyle",
      date: "30 June 2025",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
      likes: 267,
      views: 3120,
      rating: 4.9,
      featured: false,
      trending: true
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-blue-500',
      'Travel': 'bg-green-500',
      'Food': 'bg-orange-500',
      'Lifestyle': 'bg-pink-500',
      'Business': 'bg-purple-500',
      'Design': 'bg-indigo-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Discover amazing content</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Explore
                <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Amazing Stories
                </span>
              </h1>
              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                Dive into thought-provoking articles, tutorials, and insights from our community of talented writers.
              </p>
              
              {/* Enhanced Search and Filter */}
              <div className="flex flex-col lg:flex-row gap-4 max-w-3xl mx-auto mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-lg shadow-lg"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-12 pr-8 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 appearance-none bg-white text-lg shadow-lg"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 appearance-none bg-white text-lg shadow-lg"
                    >
                      <option value="latest">Latest</option>
                      <option value="popular">Popular</option>
                      <option value="trending">Trending</option>
                      <option value="rating">Top Rated</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'bg-white text-neutral-700 hover:bg-orange-50 border border-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{filteredPosts.length}</div>
              <div className="text-sm text-neutral-600">Articles Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{posts.filter(p => p.trending).length}</div>
              <div className="text-sm text-neutral-600">Trending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{posts.filter(p => p.featured).length}</div>
              <div className="text-sm text-neutral-600">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{categories.length - 1}</div>
              <div className="text-sm text-neutral-600">Categories</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {filteredPosts.find(post => post.featured) && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-orange-500" />
                  <h2 className="text-2xl font-bold text-neutral-900">Featured Article</h2>
                </div>
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-96">
                    <img
                      src={filteredPosts.find(post => post.featured)?.image}
                      alt={filteredPosts.find(post => post.featured)?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Featured
                      </span>
                      {filteredPosts.find(post => post.featured)?.trending && (
                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className={`${getCategoryColor(filteredPosts.find(post => post.featured)?.category)} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {filteredPosts.find(post => post.featured)?.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                        {filteredPosts.find(post => post.featured)?.title}
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed mb-4">
                        {filteredPosts.find(post => post.featured)?.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={filteredPosts.find(post => post.featured)?.authorAvatar}
                            alt={filteredPosts.find(post => post.featured)?.author}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white"
                          />
                          <div>
                            <p className="font-semibold text-white">{filteredPosts.find(post => post.featured)?.author}</p>
                            <p className="text-white/70 text-sm">{filteredPosts.find(post => post.featured)?.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-white/80">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{filteredPosts.find(post => post.featured)?.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{filteredPosts.find(post => post.featured)?.likes}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{filteredPosts.find(post => post.featured)?.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.trending && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                      <span className={`${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Bookmark className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs font-medium">{post.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-neutral-900 text-sm">{post.author}</p>
                          <p className="text-xs text-neutral-500">{post.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs">{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span className="text-xs">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Trending Topics */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-bold text-neutral-900">Trending Topics</h3>
                </div>
                <div className="space-y-3">
                  {categories.slice(1).map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-orange-100 text-orange-700 shadow-md'
                          : 'hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category}</span>
                        <span className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                          {posts.filter(post => post.category === category).length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Articles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-bold text-neutral-900">Trending Now</h3>
                </div>
                <div className="space-y-4">
                  {posts.filter(post => post.trending).slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 text-sm line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Start Writing</h3>
                  <p className="text-orange-100 mb-6 text-sm">
                    Join thousands of writers sharing their stories on ThinkSpace.
                  </p>
                  <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto">
            Load More Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;