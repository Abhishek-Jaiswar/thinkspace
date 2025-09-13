import React from 'react'
import { BookOpen, DollarSign, Eye, Heart, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom'
import { posts } from '../../assets/post'
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

const Overview = () => {
  const totalPost = posts.length
  const published = posts.filter((post) => post.published)

  let likes = 0;

  const allLikes = posts.map((post) => {
    return likes += post.likes
  })
  let str = likes.toString();

  let formatted = str[0] + "," + str.slice(1)
  console.log(allLikes);
  console.log(likes);



  const stats = [
    {
      title: "Total posts",
      value: totalPost,
      change: "+12.5%",
      trend: "up",
      icon: NotebookPen,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Articles Published",
      value: published.length,
      change: "+3 this month",
      trend: "up",
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Total Likes",
      value: formatted,
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

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border-2 border-zinc-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
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
      <div className="bg-white rounded-xl p-8 border-2 border-zinc-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-neutral-900">Recent Activity</h2>
          <button className="text-orange-600 hover:text-orange-700 font-medium">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {recentPosts.slice(0, 3).map((post) => (
            <Link key={post.id} to={`/article/${post.title}`}>
              <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-neutral-50 transition-colors border border-zinc-200">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Overview