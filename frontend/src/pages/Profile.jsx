import React, { useState } from 'react';
import { 
  Edit, 
  Camera, 
  MapPin, 
  Link as LinkIcon, 
  Calendar,
  Users,
  Heart,
  BookOpen,
  Award,
  Settings,
  Save,
  X
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Abhishek Jaiswar",
    username: "@abhishekjaiswar",
    bio: "Full-stack developer passionate about creating beautiful, functional web experiences. Loves React, TypeScript, and modern CSS. Writing about tech, design, and the future of web development.",
    location: "San Francisco, CA",
    website: "https://abhishekjaiswar.dev",
    joinDate: "January 2023",
    followers: 1250,
    following: 342,
    posts: 24,
    likes: 1234
  });

  const [editData, setEditData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const recentPosts = [
    {
      id: 1,
      title: "Building a Modern Bento Grid Layout with React and Tailwind CSS",
      excerpt: "Discover how to design a clean and responsive Bento Grid layout using React and Tailwind CSS...",
      publishedAt: "12 July 2025",
      views: 2847,
      likes: 124,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "The Complete Guide to Travel Photography: From Beginner to Pro",
      excerpt: "Learn the essential techniques, equipment, and mindset needed to capture stunning travel photos...",
      publishedAt: "10 July 2025",
      views: 1923,
      likes: 89,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Mastering the Art of Italian Cuisine: A Culinary Journey",
      excerpt: "Explore the rich traditions, techniques, and secrets of Italian cooking...",
      publishedAt: "8 July 2025",
      views: 1567,
      likes: 156,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=200&fit=crop"
    }
  ];

  const achievements = [
    {
      title: "First Post",
      description: "Published your first article",
      icon: BookOpen,
      earned: true,
      date: "Jan 15, 2023"
    },
    {
      title: "100 Likes",
      description: "Received 100 total likes",
      icon: Heart,
      earned: true,
      date: "Mar 22, 2023"
    },
    {
      title: "Top Writer",
      description: "Featured in top writers list",
      icon: Award,
      earned: true,
      date: "Jun 10, 2023"
    },
    {
      title: "1000 Followers",
      description: "Reached 1000 followers",
      icon: Users,
      earned: false,
      date: null
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-neutral-900">Profile</h1>
            <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-600 relative">
            <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="relative px-8 pb-8">
            {/* Profile Picture */}
            <div className="relative -mt-16 mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Details */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={editData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Bio</label>
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={editData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">Website</label>
                        <input
                          type="url"
                          name="website"
                          value={editData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={handleSave}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">{profileData.name}</h2>
                    <p className="text-orange-600 font-medium mb-4">{profileData.username}</p>
                    <p className="text-neutral-700 leading-relaxed mb-4">{profileData.bio}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 mb-6">
                      {profileData.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{profileData.location}</span>
                        </div>
                      )}
                      {profileData.website && (
                        <a
                          href={profileData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                        >
                          <LinkIcon className="w-4 h-4" />
                          <span>Website</span>
                        </a>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {profileData.joinDate}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit Profile
                    </button>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">{profileData.posts}</div>
                  <div className="text-sm text-neutral-600">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">{profileData.followers.toLocaleString()}</div>
                  <div className="text-sm text-neutral-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">{profileData.following}</div>
                  <div className="text-sm text-neutral-600">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">{profileData.likes.toLocaleString()}</div>
                  <div className="text-sm text-neutral-600">Likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-900 mb-2 line-clamp-2">{post.title}</h4>
                      <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span>{post.publishedAt}</span>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{post.views.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl ${
                        achievement.earned
                          ? 'bg-orange-50 border border-orange-200'
                          : 'bg-neutral-50 border border-neutral-200'
                      }`}
                    >
                      <div className={`p-3 rounded-xl ${
                        achievement.earned
                          ? 'bg-orange-500 text-white'
                          : 'bg-neutral-300 text-neutral-500'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          achievement.earned ? 'text-neutral-900' : 'text-neutral-500'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-neutral-600' : 'text-neutral-400'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && achievement.date && (
                          <p className="text-xs text-orange-600 mt-1">{achievement.date}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
