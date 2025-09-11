import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  Clock, 
  Heart, 
  Eye, 
  User, 
  Calendar,
  TrendingUp,
  Star,
  BookOpen,
  ArrowRight,
  Tag
} from 'lucide-react'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Technology', 'Travel', 'Food', 'Lifestyle', 'Business', 'Design']

  const featuredPosts = [
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
      featured: true,
      trending: false
    },
    {
      id: 3,
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
      featured: true,
      trending: true
    }
  ]

  const trendingPosts = [
    {
      id: 4,
      title: "Mastering the Art of Italian Cuisine: A Culinary Journey",
      excerpt: "Explore the rich traditions, techniques, and secrets of Italian cooking. From perfect pasta to authentic risotto, discover how to bring the flavors of Italy to your kitchen.",
      author: "Marco Rossi",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Food",
      date: "8 July 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
      likes: 156,
      views: 1567,
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
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
      likes: 97,
      views: 1234,
      trending: true
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
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      likes: 178,
      views: 2100,
      trending: true
    },
    {
      id: 7,
      title: "African traditions that will make you fall in love with this culture",
      excerpt: "African tradition is expressed through many different art forms, such as music, dance, art, sculpture and beadwork.",
      author: "Aisha Okafor",
      authorAvatar: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=150&h=150&fit=crop&crop=face",
      category: "Travel",
      date: "1 July 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=250&fit=crop",
      likes: 234,
      views: 1890,
      trending: true
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-blue-500',
      'Travel': 'bg-green-500',
      'Food': 'bg-orange-500',
      'Lifestyle': 'bg-pink-500',
      'Business': 'bg-purple-500',
      'Design': 'bg-indigo-500'
    }
    return colors[category] || 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Stylized Illustration */}
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  {/* Abstract face illustration */}
                  <div className="relative w-64 h-64">
                    {/* Face outline */}
                    <div className="absolute inset-0 rounded-full bg-pink-200"></div>
                    {/* Sunglasses */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-24 h-12 bg-blue-300 rounded-full"></div>
                    </div>
                    {/* Mouth */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-pink-300 rounded-full flex items-center justify-center">
                      <div className="w-12 h-16 bg-pink-400 rounded-full"></div>
                    </div>
                    {/* Expression lines */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-pink-300 rounded-full"></div>
                    <div className="absolute top-8 right-1/2 transform translate-x-1/2 w-2 h-8 bg-pink-300 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
                      alt="Olivia Brooks"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="font-medium">Olivia Brooks</span>
                      <span>•</span>
                      <span>9 min read</span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    Stunned, stuck, overwhelmed? Here's how to turn chaos into clarity and growth
                  </h1>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Learn practical strategies for building resilience in your life. From a growth mindset to strong support networks, bounce back from setbacks with these tip...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Growth', 'Resilience', 'Mindset'].map((tag) => (
                      <span key={tag} className="bg-neutral-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar Articles */}
            <div className="space-y-6">
              {/* Article 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Walking person illustration */}
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-end justify-center">
                  <div className="relative w-32 h-32 mb-4">
                    {/* Person walking */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      {/* Body */}
                      <div className="w-16 h-20 bg-pink-300 rounded-t-full relative">
                        {/* Hood */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-pink-400 rounded-full"></div>
                      </div>
                      {/* Legs */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <div className="w-6 h-12 bg-gray-300 rounded-full"></div>
                        <div className="w-6 h-12 bg-gray-300 rounded-full"></div>
                      </div>
                      {/* Shoes */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <div className="w-8 h-4 bg-green-400 rounded-full"></div>
                        <div className="w-8 h-4 bg-green-400 rounded-full"></div>
                      </div>
                      {/* Shadow */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-orange-300 rounded-full opacity-60"></div>
                    </div>
                    {/* Path line */}
                    <div className="absolute bottom-2 left-0 right-0 h-1 bg-pink-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" 
                      alt="Daniel Foster"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="font-medium">Daniel Foster</span>
                      <span>•</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2">
                    Shrink your digital footprint, step by step
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                    Reduce your environmental impact with practical tips for eco-friendly living.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Minimalism', 'Impact'].map((tag) => (
                      <span key={tag} className="bg-neutral-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Article 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Sunset scene illustration */}
                <div className="relative h-48 bg-gradient-to-b from-orange-200 via-yellow-200 to-orange-300 flex items-end justify-center">
                  <div className="relative w-full h-full">
                    {/* Person sitting */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      {/* Body */}
                      <div className="w-12 h-16 bg-orange-400 rounded-t-full relative">
                        {/* Head */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full"></div>
                      </div>
                      {/* Legs */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <div className="w-5 h-12 bg-green-300 rounded-full"></div>
                        <div className="w-5 h-12 bg-green-300 rounded-full"></div>
                      </div>
                      {/* Shoes */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <div className="w-6 h-3 bg-pink-400 rounded-full"></div>
                        <div className="w-6 h-3 bg-pink-400 rounded-full"></div>
                      </div>
                    </div>
                    {/* Horizon line */}
                    <div className="absolute bottom-4 left-0 right-0 h-1 bg-orange-400 rounded-full"></div>
                    {/* Hills */}
                    <div className="absolute bottom-4 left-0 right-0 h-8 bg-gradient-to-t from-orange-500 to-transparent rounded-t-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                      alt="Benjamin Cole"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="font-medium">Benjamin Cole</span>
                      <span>•</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2">
                    Stronger relationships start with empathy
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                    Learn to develop your empathic skills and build better relationships in your personal life.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Communication', 'Growth'].map((tag) => (
                      <span key={tag} className="bg-neutral-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <button className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-2">
              View all
            </button>
            <button className="text-neutral-600 hover:text-neutral-900 font-medium pb-2">
              Editor's pick
            </button>
            <button className="text-neutral-600 hover:text-neutral-900 font-medium pb-2">
              Most discussed
            </button>
            <button className="text-neutral-600 hover:text-neutral-900 font-medium pb-2">
              Deep dives
            </button>
            <button className="text-neutral-600 hover:text-neutral-900 font-medium pb-2">
              Short reads
            </button>
            <button className="text-neutral-600 hover:text-neutral-900 font-medium pb-2">
              For you
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Article 1 */}
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=250&fit=crop"
                    alt="Article 1"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
                      <span className="font-medium">Dr. Sophia Nguyen</span>
                      <span>•</span>
                      <span>13 min read</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-3 text-lg line-clamp-2">
                      Breaking the cycle of negative self-talk
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      Negative self-talk can hold us back and prevent us from reaching our full potential. In this article, we'll explore the concept of a gro...
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Psychology', 'Growth', 'Mindset'].map((tag) => (
                        <span key={tag} className="bg-neutral-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Article 2 */}
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
                    alt="Article 2"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
                      <span className="font-medium">Alex Chen</span>
                      <span>•</span>
                      <span>8 min read</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-3 text-lg line-clamp-2">
                      The future of artificial intelligence in healthcare
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      Discover how AI is revolutionizing medical diagnosis, treatment planning, and patient care in ways we never imagined possible...
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Technology', 'Healthcare', 'AI'].map((tag) => (
                        <span key={tag} className="bg-neutral-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Article 3 */}
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop"
                    alt="Article 3"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
                      <span className="font-medium">Maria Rodriguez</span>
                      <span>•</span>
                      <span>11 min read</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-3 text-lg line-clamp-2">
                      Sustainable living: Small changes, big impact
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      Learn practical tips and strategies for living more sustainably. From reducing waste to choosing eco-friendly products...
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Lifestyle', 'Environment', 'Sustainability'].map((tag) => (
                        <span key={tag} className="bg-neutral-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Article 4 */}
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop"
                    alt="Article 4"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
                      <span className="font-medium">James Wilson</span>
                      <span>•</span>
                      <span>6 min read</span>
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-3 text-lg line-clamp-2">
                      Mastering the art of remote collaboration
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      Essential tools and strategies for building effective remote teams and maintaining productivity in distributed work environments...
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['Business', 'Remote Work', 'Productivity'].map((tag) => (
                        <span key={tag} className="bg-neutral-900 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Trending Writers Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-neutral-900 mb-6">Trending writers</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Michelle Rodriguez",
                      profession: "Social Psychologist",
                      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                    },
                    {
                      name: "Dave Kim",
                      profession: "Environmental Scientist",
                      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                    },
                    {
                      name: "Dr. Sophia Nguyen",
                      profession: "Psychologist",
                      avatar: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=150&h=150&fit=crop&crop=face"
                    },
                    {
                      name: "Ethan Parker",
                      profession: "Behavioral Scientist",
                      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    }
                  ].map((writer, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={writer.avatar}
                        alt={writer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 text-sm">{writer.name}</h4>
                        <p className="text-xs text-neutral-600">{writer.profession}</p>
                      </div>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-orange-600 transition-colors">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-neutral-600">Find content that interests you most</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category, index) => (
              <Link
                key={index}
                to={`/post?category=${category}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-200"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${getCategoryColor(category)} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {category}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {Math.floor(Math.random() * 50) + 10} articles
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-orange-100 mb-8">
            Get the latest articles and insights delivered to your inbox. No spam, just great content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default Home