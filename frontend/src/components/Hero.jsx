import React from 'react';
import { posts } from '../assets/post';
import { FlameIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-4 h-full">
      <div className="max-w-7xl mx-auto md:px-4 h-full ">
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* Main Featured Article (Left) */}
          {posts.filter((post) => post.featured).slice(0, 1).map((post) => (
            <div key={post.id} className="lg:w-[60%] w-full flex flex-col">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt="Featured Article"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="group py-4 cursor-pointer">
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-neutral-900 mb-3 leading-snug group-hover:underline group-hover:text-orange-500 ">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-neutral-600 mb-5 leading-relaxed">
                  {post.excerpt.slice(0,230)} 
                  {" "}
                  <Link to={"/articles"} className='text-orange-500 '>
                  ...Read more
                  </Link>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Minimalism', 'Impact'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-neutral-700 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Right Side Articles */}
          <div className="lg:w-[40%]">
            <div className='pb-4 flex items-center gap-2'>
              <FlameIcon className='w-8 h-8' />
              <h1 className='text-2xl font-bold text-neutral-800'>Top Trending Articles</h1>
            </div>
            {/* Trending Articles */}
            <div className="flex flex-col gap-4">
              {posts
                .filter((post) => post.trending)
                .slice(0, 5)
                .map((post) => (
                  <article key={post.id}>
                    <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden bg-white border-2 border-zinc-100">

                      {/* Content Section */}
                      <div className=" group flex-1 p-4 flex flex-col justify-center cursor-pointer">
                        <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:underline group-hover:text-orange-500 duration-100 transition-colors ease-in">
                          {post.title}
                        </h3>
                        <p className="text-sm text-neutral-600 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Image Section */}
                      <div className="relative lg:w-2/5 w-full h-30 lg:h-auto p-2">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                        
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
