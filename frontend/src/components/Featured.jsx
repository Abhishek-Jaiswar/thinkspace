import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart, TrendingUp, Star, Share2, Bookmark, ArrowRight } from 'lucide-react';
import { posts } from '../assets/post';

const Featured = () => {
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
        <div className="max-w-7xl mx-auto md:mt-16 ">
            <div className='space-y-1'>
                <h1 className='md:text-4xl text-2xl text-neutral-800 font-bold'>Featured Reads</h1>
                <p className='text-neutral-600 font-semibold'>Handpicked stories for developers, designers, and creators</p>
            </div>
            <div className=" mt-10">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-4">
                        {/* Articles Grid */}
                        <div className="grid md:grid-cols-4 gap-8">
                            {posts.filter(post => post.featured).splice(0, 8).map((post) => (
                                <Link to={`/article/${post.title}`} >
                                    <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                                        <div className="relative h-45 overflow-hidden">
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
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <Link to={'/articles'}>
                        <button
                            className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-md transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto cursor-pointer">
                            Go to Articles Page
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;