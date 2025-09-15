import React, { useState } from 'react'
import FileUplaod from '../../admin/components/FileUpload'
import Input from '../../components/ui/Input'
import Textarea from '../../components/ui/Textarea'
import Select from '../../components/ui/Select'
import { UploadCloud } from 'lucide-react'

const BlogEditor = () => {
  const [option, seOption] = useState('')
  const [date, setDate] = useState('');
  return (
    <div className='relative h-full w-full'>
      <div className=' flex items-center justify-between'>
        <h1 className='text-xl font-bold text-neutral-700'>Establish you blog structure</h1>
        <div className='flex justify-end gap-6'>
          <button>Cancel</button>
          <button className='text-sm font-semibold px-4 py-2 rounded-lg bg-orange-400 hover:bg-orange-500 transition-all duration-200 text-white flex gap-1'>
            <UploadCloud className='w-4 h-4 text-white' />
            Publish
          </button>
        </div>
      </div>
      <form className='md:flex w-full'>
        <div className='md:w-1/2 w-full py-4 space-y-6'>
          <div >
            <FileUplaod
              maxSize={10}
              onFileSelect={(file) => {
                console.log("Gallery file selected:", file.name)
              }}
              onFileRemove={() => {
                console.log("Gallery file removed")
              }}
              accept="image/*"
            />
          </div>
          <div className=''>
            <label htmlFor='title' className=' text-neutral-800 capitalize'>Give a title to your article</label>
            <Input
              type='text'
              className=' mt-1'
              name='title'
              id='title'
              placeholder='Eg: A quick brown fox jumps over the lazy dog...'

            />
          </div>
          <div className=''>
            <label htmlFor='description'>Give a delightful description</label>
            <Textarea
              type='text'
              className=' mt-1'
              name='title'
              id='title'
              placeholder='Eg: Why the white color is white not black, what the heck im talking about...'
            />
          </div>
          <div className='md:flex items-center'>
            <div className='md:w-1/2 w-full '>
              <Select option={option} setOption={seOption} />
            </div>
            <div className='md:w-1/2 w-full p-2'>
              <label htmlFor="date">Select date</label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className=' mt-2'
              />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 w-full '>
          asdf
        </div>
      </form>
    </div>
  )
}

export default BlogEditor