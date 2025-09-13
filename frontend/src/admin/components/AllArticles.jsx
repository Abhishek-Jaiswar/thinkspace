import React, { useState } from 'react'
import { posts } from '../../assets/post'
import { Link } from 'react-router-dom';
import { Bookmark, Clock, Delete, Edit, EllipsisVertical, Heart, Share2, Star, Trash, TrendingUp } from 'lucide-react';

const AllArticles = () => {
    const [openMenuId, setOpenMenuId] = useState(null)
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

    const handleOpen = (id) => {
        setOpenMenuId((prev) => prev === id ? null : id)
    }

    return (
        <div className="lg:col-span-4">
            {/* Articles Grid */}
            <div className="grid md:grid-cols-4 gap-8">
                {posts.map((post) => (
                    <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
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
                            <div className="absolute top-4 right-4 gap-2 bg-white rounded-md flex items-center justify-between">
                                <button
                                    onClick={() => handleOpen(post.id)}
                                    className="p-2 border-r cursor-pointer">
                                    <Bookmark className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleOpen(post.id)}
                                    className="p-2 pl-0 cursor-pointer">
                                    <EllipsisVertical className="w-4 h-4" />
                                </button>
                                {openMenuId === post.id && (
                                    <div className='absolute w-20 top-10 right-0 h-auto bg-white rounded-md p-2 z-20 flex flex-col gap-2 '>
                                        <div
                                            onClick={() => handleOpen(post.id)}
                                            className='group flex items-center gap-1 border-b border-b-neutral-200 p-1 hover:bg-neutral-100 rounded-sm'>
                                            <Edit className='w-4 h-4 text-neutral-700 group-hover:text-neutral-600' />
                                            <span className='text-xs text-neutral-700 group-hover:text-neutral-800 mt-0.5'>Edit</span>
                                        </div>
                                        <div
                                            onClick={() => handleOpen(post.id)}
                                            className=' group flex items-center gap-1 border-b border-b-neutral-200 p-1 hover:bg-neutral-100 rounded-sm'>
                                            <Trash className='w-4 h-4 text-neutral-700 group-hover:text-neutral-600' />
                                            <span className='text-xs text-neutral-700 group-hover:text-neutral-800 mt-0.5'>Delete</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-white text-xs font-medium">{post.rating}</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/article/${encodeURIComponent(post.title)}`} >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 group-hover:underline transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={post.authorAvatar}
                                            alt={post.author}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-neutral-900 text-xs">{post.author}</p>
                                            <p className="text-xs text-neutral-500">{post.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start text-neutral-500">
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
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default AllArticles