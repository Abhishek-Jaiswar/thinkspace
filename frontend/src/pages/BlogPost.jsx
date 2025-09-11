import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Bookmark, 
  Clock, 
  User, 
  Calendar,
  MessageCircle,
  ThumbsUp,
  Eye,
  Tag
} from 'lucide-react';

const BlogPost = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(124);
  const [showComments, setShowComments] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress indicator
  React.useEffect(() => {
    const updateReadingProgress = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const progress = Math.min(
        100,
        Math.max(0, ((scrollTop - articleTop + windowHeight) / articleHeight) * 100)
      );
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const post = {
    id: 1,
    title: "Building a Modern Bento Grid Layout with React and Tailwind CSS",
    excerpt: "Discover how to design a clean and responsive Bento Grid layout using React and Tailwind CSS. This guide walks you through creating visually appealing image cards, gradient overlays, and structured content blocks.",
    content: `
      <p>In the ever-evolving world of web design, the Bento Grid layout has emerged as one of the most popular and visually appealing ways to organize content. This modern approach to layout design takes inspiration from Japanese bento boxes, where different elements are organized in a structured yet flexible grid system.</p>

      <p>Today, we'll explore how to create a stunning Bento Grid layout using React and Tailwind CSS. This combination provides the perfect balance of functionality and aesthetics, allowing you to build responsive, interactive layouts that work seamlessly across all devices.</p>

      <h2 id="what-is-bento">What is a Bento Grid?</h2>
      
      <p>A Bento Grid is a layout pattern that organizes content into rectangular sections of varying sizes, similar to how food is arranged in a Japanese bento box. Each section can contain different types of content - images, text, videos, or interactive elements - creating a visually interesting and organized display.</p>

      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop" alt="Bento Grid Layout Example" className="w-full rounded-xl my-8 shadow-lg" />

      <p>The key characteristics of a Bento Grid include:</p>
      <ul>
        <li><strong>Asymmetric layouts:</strong> Different sized sections create visual interest</li>
        <li><strong>Content hierarchy:</strong> Important content gets larger spaces</li>
        <li><strong>Responsive design:</strong> Adapts to different screen sizes</li>
        <li><strong>Visual balance:</strong> Maintains harmony despite varied sizes</li>
      </ul>

      <h2 id="getting-started">Getting Started with React and Tailwind</h2>
      
      <p>Before we dive into the implementation, let's set up our development environment. You'll need Node.js installed on your system, and we'll use Vite for our build tool due to its excellent performance and developer experience.</p>

      <div className="bg-gray-900 rounded-xl p-6 my-8">
        <pre className="text-green-400 text-sm overflow-x-auto"><code>npm create vite@latest bento-grid-app -- --template react
cd bento-grid-app
npm install
npm run dev</code></pre>
      </div>

      <p>Once your development server is running, you'll see a basic React application. Now let's install Tailwind CSS:</p>

      <div className="bg-gray-900 rounded-xl p-6 my-8">
        <pre className="text-green-400 text-sm overflow-x-auto"><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      </div>

      <h2 id="creating-component">Creating the Bento Grid Component</h2>
      
      <p>Now, let's create our Bento Grid component. We'll start with a basic structure and then enhance it with animations and responsive behavior.</p>

      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Code Editor with React Component" className="w-full rounded-xl my-8 shadow-lg" />

      <h3 id="basic-structure">Basic Grid Structure</h3>
      
      <p>The foundation of our Bento Grid is a CSS Grid container with defined areas. We'll use Tailwind's grid utilities to create a flexible layout that adapts to different screen sizes.</p>

      <div className="bg-gray-900 rounded-xl p-6 my-8">
        <pre className="text-green-400 text-sm overflow-x-auto"><code>const BentoGrid = () => {
  return (
    &lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
      &lt;div className="md:col-span-2 lg:row-span-2"&gt;
        &lt;!-- Large featured item --&gt;
      &lt;/div&gt;
      &lt;div className="lg:col-span-1"&gt;
        &lt;!-- Small item --&gt;
      &lt;/div&gt;
      &lt;div className="lg:col-span-1"&gt;
        &lt;!-- Small item --&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};</code></pre>
      </div>

      <h2 id="advanced-features">Advanced Features and Animations</h2>
      
      <p>To make our Bento Grid truly stand out, we'll add hover effects, smooth transitions, and interactive elements. These enhancements will create a more engaging user experience while maintaining the clean, organized aesthetic.</p>

      <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop" alt="Interactive Bento Grid with Hover Effects" className="w-full rounded-xl my-8 shadow-lg" />

      <h3 id="hover-effects">Hover Effects and Transitions</h3>
      
      <p>Adding subtle hover effects can significantly improve the user experience. We'll implement scale transforms, shadow changes, and color transitions that provide visual feedback when users interact with the grid items.</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h4>
        <p className="text-blue-800">Use CSS transforms sparingly. Too many animations can overwhelm users and hurt performance. Focus on subtle, meaningful interactions that enhance the user experience.</p>
      </div>

      <h2 id="responsive-design">Responsive Design Considerations</h2>
      
      <p>One of the key advantages of using CSS Grid with Tailwind is the ease of creating responsive layouts. We'll explore different approaches to ensure our Bento Grid looks great on all devices, from mobile phones to large desktop screens.</p>

      <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop" alt="Responsive Design on Different Devices" className="w-full rounded-xl my-8 shadow-lg" />

      <h3 id="mobile-first">Mobile-First Approach</h3>
      
      <p>Start with a single-column layout for mobile devices, then progressively enhance for larger screens. This ensures your Bento Grid works well on all devices.</p>

      <h2 id="best-practices">Best Practices and Tips</h2>
      
      <p>As with any design pattern, there are certain best practices to follow when implementing Bento Grids. We'll cover performance optimization, accessibility considerations, and design principles that will help you create effective layouts.</p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-xl">
        <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Common Pitfalls</h4>
        <ul className="text-yellow-800 space-y-1">
          <li>• Don't make sections too small on mobile</li>
          <li>• Ensure sufficient color contrast for accessibility</li>
          <li>• Test with real content, not just placeholder text</li>
          <li>• Consider loading performance with many images</li>
        </ul>
      </div>

      <h2 id="conclusion">Conclusion</h2>
      
      <p>The Bento Grid layout is a powerful and flexible approach to organizing content on the web. By combining React's component-based architecture with Tailwind's utility-first CSS, you can create stunning, responsive layouts that enhance user experience and visual appeal.</p>

      <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop" alt="Final Bento Grid Implementation" className="w-full rounded-xl my-8 shadow-lg" />

      <p>Remember to experiment with different configurations, test on various devices, and always prioritize user experience in your design decisions. The Bento Grid is just one tool in your design toolkit, but when used effectively, it can transform how users interact with your content.</p>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-xl">
        <h4 className="font-semibold text-green-900 mb-2">🎉 Next Steps</h4>
        <p className="text-green-800">Try implementing your own Bento Grid with different content types. Experiment with animations, explore advanced CSS Grid features, and don't forget to share your creations with the community!</p>
      </div>
    `,
    author: {
      name: "Abhishek Jaiswar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Full-stack developer passionate about creating beautiful, functional web experiences. Loves React, TypeScript, and modern CSS.",
      followers: 1250
    },
    category: "Technology",
    tags: ["React", "Tailwind CSS", "Web Design", "CSS Grid", "Frontend"],
    publishedAt: "12 July 2025",
    readTime: "20 min read",
    views: 2847,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    featured: true
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Mastering CSS Grid: A Complete Guide",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      readTime: "15 min read",
      publishedAt: "10 July 2025"
    },
    {
      id: 3,
      title: "Advanced React Patterns for Modern Applications",
      author: "David Kim",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      readTime: "18 min read",
      publishedAt: "8 July 2025"
    },
    {
      id: 4,
      title: "Creating Responsive Designs with Tailwind CSS",
      author: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1440342359438-84889db2595b?w=400&h=250&fit=crop",
      readTime: "12 min read",
      publishedAt: "6 July 2025"
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/post"
              className="flex items-center gap-2 text-neutral-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to articles</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleBookmark}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Reading Progress Bar */}
        <div className="h-1 bg-neutral-200">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              {post.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Author and Meta Info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-neutral-900">{post.author.name}</h3>
                  <p className="text-neutral-600">{post.author.followers.toLocaleString()} followers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-neutral-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-headings:font-bold prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-ul:text-neutral-700 prose-li:text-neutral-700">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-neutral-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:scroll-mt-24 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-neutral-900 [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:scroll-mt-24 [&>p]:text-neutral-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>img]:rounded-xl [&>img]:shadow-lg [&>img]:my-8 [&>ul]:my-6 [&>li]:mb-2 [&>pre]:bg-gray-900 [&>pre]:text-green-400 [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:my-8 [&>code]:text-green-400 [&>code]:text-sm [&>div]:my-8"
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      isLiked
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{likes}</span>
                  </button>
                  
                  <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-neutral-100 text-neutral-700 hover:bg-orange-100 hover:text-orange-600 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Comments</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{post.author.name}</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">{post.author.bio}</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {[
                    { title: "What is a Bento Grid?", id: "what-is-bento" },
                    { title: "Getting Started with React and Tailwind", id: "getting-started" },
                    { title: "Creating the Bento Grid Component", id: "creating-component" },
                    { title: "Basic Grid Structure", id: "basic-structure", level: 2 },
                    { title: "Advanced Features and Animations", id: "advanced-features" },
                    { title: "Hover Effects and Transitions", id: "hover-effects", level: 2 },
                    { title: "Responsive Design Considerations", id: "responsive-design" },
                    { title: "Mobile-First Approach", id: "mobile-first", level: 2 },
                    { title: "Best Practices and Tips", id: "best-practices" },
                    { title: "Conclusion", id: "conclusion" }
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block text-sm text-neutral-600 hover:text-orange-600 transition-colors py-1 ${
                        item.level === 2 ? 'ml-4 text-xs' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/post/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-neutral-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-neutral-500 mt-1">{relatedPost.author}</p>
                          <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col gap-3">
          <button
            onClick={handleLike}
            className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              isLiked
                ? 'bg-orange-500 text-white'
                : 'bg-white text-neutral-600 hover:bg-orange-50'
            }`}
          >
            <Heart className={`w-6 h-6 mx-auto ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={handleBookmark}
            className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              isBookmarked
                ? 'bg-orange-500 text-white'
                : 'bg-white text-neutral-600 hover:bg-orange-50'
            }`}
          >
            <Bookmark className={`w-6 h-6 mx-auto ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          
          <button className="w-14 h-14 rounded-full bg-white text-neutral-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-50">
            <Share2 className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
