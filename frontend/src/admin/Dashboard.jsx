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
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="w-full mx-auto">
        <div className="flex">
          {/* Sidebar */}
          <div className="lg:w-[16rem] w-[14rem] h-[90.99vh] border-r-2 border-zinc-200 fixed">
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
          </div>

          {/* Main Content */}
          <div className=" lg:ml-[16rem] ml-[14rem] w-full ">
            <div className='fixed h-full w-full'>
              <Header />
            </div>
            <main className='mt-[48px] p-4'>
              {activeTab === 'overview' && <Overview />}

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
                  {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                  </div> */}
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
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
