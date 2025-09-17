import React, { useState } from 'react'
import FileUplaod from '../../admin/components/FileUpload'
import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import Select from '../../components/ui/Select'
import { UploadCloud, Save } from 'lucide-react'
import Radio from '../../components/ui/Radio'
import CheckboxGroup from '../../components/ui/Radio'

const BlogEditor = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState([])
  const [image, setImage] = useState(null)
  console.log({ title, description, category, date, content, status, image });

  const handleStatusChange = (e) => {
    const { value, checked } = e.target;

    setStatus((prev) =>
      checked
        ? [...prev, value]                // add if checked
        : prev.filter((item) => item !== value) // remove if unchecked
    );
  };
  return (
    <div className="relative h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-neutral-700">
          Establish your blog structure
        </h1>
        <div className="flex gap-3">
          <button className="text-xs font-semibold px-4 py-0.5 rounded-md text-orange-500  flex gap-1 items-center border border-orange-500">
            <Save className="w-4 h-4 text-orange-500" />
            Draft
          </button>
          <button className="text-xs font-semibold px-4 py-2 rounded-md text-white bg-orange-400  flex gap-1 items-center border border-orange-500">
            <UploadCloud className="w-4 h-4 text-white" />
            Publish
          </button>
        </div>
      </div>

      {/* Form */}
      <form className="md:flex w-full">
        <div className="md:w-1/2 w-full py-4 space-y-6">
          {/* Upload */}
          <FileUplaod
            maxSize={10}
            onFileSelect={(file) => {
              setImage((prev) => ({ ...prev, file }));
            }}
            onFileRemove={() => {
              setImage((prev) => ({ ...prev, file: null }));
            }}
            accept="image/*"
          />

          {/* Title */}
          <div>
            <label htmlFor="title" className="text-neutral-800 capitalize">
              Give a title to your article
            </label>
            <Input
              type="text"
              className="mt-1"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Eg: A quick brown fox jumps over the lazy dog..."
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description">Give a delightful description</label>
            <Textarea
              type="text"
              className="mt-1"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Eg: Why the white color is white not black..."
            />
          </div>

          {/* Category + Date */}
          <div className="md:flex items-center">
            <div className="md:w-1/2 w-full">
              <Select option={category} setCategory={setCategory} />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label htmlFor="date">Select date</label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          {/* Status */}
          <CheckboxGroup
            label="status"
            title="Select article status (choose one or both)"
            data={[
              { label: "Featured", value: "featured" },
              { label: "Trending", value: "trending" },
            ]}
            value={status}
            onChange={handleStatusChange}
          />

        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full px-4 py-4">
          <label htmlFor="content" className="block mb-2 font-medium">
            Write your article content
          </label>
          <Textarea
            id="content"
            name="content"
            className="h-[600px] w-full resize-y border rounded-lg p-3"
            placeholder="Start writing here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default BlogEditor
