import React from 'react'
import { Plus, Search } from 'lucide-react'
import AllArticles from '../../admin/components/AllArticles'
import { Link } from 'react-router-dom'

const ManageArticles = () => {
    return (
        <div className="space-y-6">
            {/* Posts Header */}
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl text-neutral-700 font-bold'>Manage Your Articles</h1>
                <Link to='/dashboard/create'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-md flex items-center gap-2 transition-colors cursor-pointer">
                        <Plus className="w-5 h-5" />
                        New Post
                    </button>
                </Link>
            </div>
            <div className=" flex items-center justify-between">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search posts..."
                                className="pl-12 pr-4 text-sm py-2 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 w-64"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Posts List */}
            <AllArticles />
        </div>
    )
}

export default ManageArticles