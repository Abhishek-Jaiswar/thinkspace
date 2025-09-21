import { Post } from "../models/post.model";

export const createPost = async (req, res) => {
    try {
        const { title, description, content, category, readTime, image, featured, trending, published, draft } = req.body;
        if (!title || !description || !category || !readTime || !content) {
            return res.status(401).json({
                message: "All fields are required..",
                success: false
            })
        }

        const existingPost = await Post.findOne({ title })
        if (existingPost) {
            return res.status(409).json({
                message: "Post allready exist with this title",
                success: false
            })
        }

        const newPost = await Post.create({
            title,
            description,
            content,
            category,
            readTime,
            image,
            featured,
            trending,
            published,
            draft
        })

        return res.status(201).json({
            message: "Post created successfully",
            success: true,
            post: newPost
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Failed to create post",
            success: false
        })
    }
}