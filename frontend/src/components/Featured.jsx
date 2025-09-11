import React from "react";

const Featured = () => {
    // Navigation data
    const navigationItems = [
        { name: "Travel", active: true },
        { name: "Europe", active: false },
        { name: "Asia", active: false },
        { name: "Africa", active: false },
        { name: "Stories", active: false }
    ];

    // Travel articles data with varying heights for masonry effect
    const travelArticles = [
        {
            id: 1,
            title: "Travel Europe in winter",
            description: "While many of the primary attractions are closed during this time, the cities are quiet and relatively inexpensive.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
            category: "EUROPE",
            date: "November 16, 2022",
            height: "h-80"
        },
        {
            id: 2,
            title: "How to make a career in travel photography",
            description: "Discover the most beautiful places through your lens. We have 10 tips to start your journey.",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop",
            category: "TRAVEL",
            date: "March 08, 2021",
            height: "h-96"
        },
        {
            id: 3,
            title: "We visit the Waorani Territory, the heart of Amazonas",
            description: "The main economic activity of the Ecuadorian Amazon is the exploitation of oil and oil-coal, cause of constant social conflicts and environment.",
            image: "https://images.unsplash.com/photo-1440342359438-84889db2595b?w=400&h=300&fit=crop",
            category: "STORIES",
            date: "March 16, 2021",
            height: "h-64"
        },
        {
            id: 4,
            title: "African traditions that will make you fall in love with this culture",
            description: "African tradition is expressed through many different art forms, such as music, dance, art, sculpture and beadwork.",
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=700&fit=crop",
            category: "AFRICA",
            date: "March 08, 2021",
            height: "h-[28rem]"
        },
        {
            id: 5,
            title: "Essential items while travelling",
            description: "You'll find a list with all mandatory items that shouldn't be forgotten from your travel list.",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
            category: "TRAVEL",
            date: "September 22, 2022",
            height: "h-72"
        },
        {
            id: 6,
            title: "Awesome quick notes from Japan",
            description: "This is a small guide focuses on food in Tokyo and other rural villages.",
            image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=550&fit=crop",
            category: "ASIA",
            date: "September 28, 2022",
            height: "h-88"
        },
        {
            id: 7,
            title: "Mountain adventures in Asia",
            description: "Exploring the highest peaks and most scenic mountain ranges across Asia.",
            image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=350&fit=crop",
            category: "ASIA",
            date: "March 2, 2022",
            height: "h-68"
        },
        {
            id: 8,
            title: "Safari wildlife experience",
            description: "An unforgettable journey through African wilderness and wildlife reserves.",
            image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=600&fit=crop",
            category: "AFRICA",
            date: "December 12, 2021",
            height: "h-96"
        },
        {
            id: 9,
            title: "Hidden gems of Europe",
            description: "Discover Europe's best kept secrets and off-the-beaten-path destinations.",
            image: "https://images.unsplash.com/photo-1471919743851-c4df8b6eed95?w=400&h=450&fit=crop",
            category: "EUROPE",
            date: "March 28, 2022",
            height: "h-80"
        }
    ];

    // Get category color
    const getCategoryColor = (category) => {
        const colors = {
            'EUROPE': 'bg-blue-500',
            'TRAVEL': 'bg-teal-500',
            'STORIES': 'bg-green-500',
            'AFRICA': 'bg-orange-500',
            'ASIA': 'bg-purple-500'
        };
        return colors[category] || 'bg-gray-500';
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">To travel is to live</h1>
                <div className="flex items-center justify-center space-x-6 flex-wrap">
                    {navigationItems.map((item, index) => (
                        <span
                            key={index}
                            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${item.active
                                    ? 'bg-teal-500 text-white'
                                    : 'text-gray-600 hover:text-teal-500'
                                }`}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Pinterest-style Masonry Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {travelArticles.map((article) => (
                        <div
                            key={article.id}
                            className="break-inside-avoid mb-6 group cursor-pointer"
                        >
                            <div className={`relative ${article.height} w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white`}>

                                {/* Full Image Background */}
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                                        {article.category}
                                    </span>
                                </div>

                                {/* Date Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                                        {article.date}
                                    </span>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                    <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-teal-300 transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                        {article.description}
                                    </p>

                                    {/* Read More Indicator */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center text-teal-300 text-sm font-medium">
                                            Read more
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            <div className="max-w-7xl mx-auto px-4 mt-12 text-center">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Load More Stories
                </button>
            </div>
        </div>
    );
};

export default Featured;