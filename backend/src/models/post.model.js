import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true, },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    authorAvatar: { type: String },
    category: { type: String, required: true },
    readTime: { type: Number, required: true },
    image: { type: String, required: true },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    published: { type: Boolean, default: false },
    draft: { type: Boolean, default: true },

}, { timestamps: true });

// Indexes
postSchema.index({ category: 1 });
postSchema.index({ author: 1 });
postSchema.index({ featured: 1 });
postSchema.index({ trending: 1 });
postSchema.index({ published: 1 });
postSchema.index({ createdAt: -1 });
postSchema.index({ category: 1, trending: -1 });

export const Post = mongoose.model("Post", postSchema);
