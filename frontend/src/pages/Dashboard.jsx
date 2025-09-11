import React, { useState } from 'react';
import { 
  Plus, 
  BarChart3, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  TrendingUp,
  Calendar,
  Edit,
  Trash2,
  MoreVertical,
  Search,
  Filter,
  BookOpen,
  DollarSign,
  Target
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Total Views",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Articles Published",
      value: "24",
      change: "+3 this month",
      trend: "up",
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Total Likes",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Monthly Revenue",
      value: "$2,847",
      change: "+15.3%",
      trend: "up",
      icon: DollarSign,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Building a Modern Bento Grid Layout with React and Tailwind CSS",
      status: "Published",
      views: 2847,
      likes: 124,
      comments: 23,
      publishedAt: "12 July 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "The Complete Guide to Travel Photography: From Beginner to Pro",
      status: "Draft",
      views: 0,
      likes: 0,
      comments: 0,
      publishedAt: "Draft",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Mastering the Art of Italian Cuisine: A Culinary Journey",
      status: "Published",
      views: 1923,
      likes: 89,
      comments: 15,
      publishedAt: "8 July 2025",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "The Future of Remote Work: Trends and Predictions for 2025",
      status: "Scheduled",
      views: 0,
      likes: 0,
      comments: 0,
      publishedAt: "15 July 2025",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-700';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-700';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'posts', label: 'Posts', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'earnings', label: 'Earnings', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
              <p className="text-neutral-600 mt-1">Welcome back! Here's what's happening with your content.</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5" />
              New Post
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        activeTab === tab.id
                          ? 'bg-orange-100 text-orange-700 font-semibold'
                          : 'text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className={`text-sm font-medium ${
                            stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</h3>
                          <p className="text-neutral-600 text-sm">{stat.title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-neutral-900">Recent Activity</h2>
                    <button className="text-orange-600 hover:text-orange-700 font-medium">
                      View All
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 line-clamp-1">{post.title}</h3>
                          <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                              {post.status}
                            </span>
                            <span>{post.publishedAt}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="space-y-6">
                {/* Posts Header */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search posts..."
                          className="pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 w-64"
                        />
                      </div>
                      <button className="flex items-center gap-2 px-4 py-3 border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors">
                        <Filter className="w-5 h-5" />
                        <span>Filter</span>
                      </button>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
                      <Plus className="w-5 h-5" />
                      New Post
                    </button>
                  </div>
                </div>

                {/* Posts List */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-neutral-50 border-b border-neutral-200">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold text-neutral-900">Post</th>
                          <th className="text-left py-4 px-6 font-semibold text-neutral-900">Status</th>
                          <th className="text-left py-4 px-6 font-semibold text-neutral-900">Views</th>
                          <th className="text-left py-4 px-6 font-semibold text-neutral-900">Likes</th>
                          <th className="text-left py-4 px-6 font-semibold text-neutral-900">Published</th>
                          <th className="text-right py-4 px-6 font-semibold text-neutral-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {recentPosts.map((post) => (
                          <tr key={post.id} className="hover:bg-neutral-50 transition-colors">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-4">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div>
                                  <h3 className="font-semibold text-neutral-900 line-clamp-1">{post.title}</h3>
                                  <p className="text-sm text-neutral-500">{post.comments} comments</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                                {post.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-neutral-600">{post.views.toLocaleString()}</td>
                            <td className="py-4 px-6 text-neutral-600">{post.likes}</td>
                            <td className="py-4 px-6 text-neutral-600">{post.publishedAt}</td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-end gap-2">
                                <button className="p-2 text-neutral-600 hover:text-orange-600 hover:bg-orange-100 rounded-lg transition-colors">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors">
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Analytics Overview</h2>
                  <div className="h-64 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <p className="text-neutral-500">Analytics chart would go here</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Earnings Overview</h2>
                  <div className="h-64 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <p className="text-neutral-500">Earnings chart would go here</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
