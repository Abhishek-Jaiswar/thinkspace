import React, { useCallback, useRef, useState } from 'react'
import { ImageIcon, Upload, X } from 'lucide-react'

const FileUpload = ({ onFileSelect, onFileRemove, accept = 'image/*', maxSize = 1 }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [previewURL, setPreviewURL] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileSelect = useCallback((file) => {
        if (file.size > maxSize * 1024 * 1024) {
            alert(`File size must be less than ${maxSize}`)
            return
        }

        if (accept && !file.type.match(accept.replace("*", ".*"))) {
            alert("Invalid file type");
            return;
        }

        setUploading(true)
        setSelectedFile(file);

        // creating preview
        if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file)
            setPreviewURL(url)
        }

        setTimeout(() => {
            setUploading(false);
            onFileSelect?.(file)
        }, 1000)
    }, [onFileSelect, accept, maxSize])

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        handleFileSelect(file)
    }

    const handleDragOver = useCallback((e) => {
        e.preventDefault()
        setIsDragOver(true)
    }, [])

    const handleDragLeave = useCallback((e) => {
        e.preventDefault()
        setIsDragOver(false)
    }, [])

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragOver(false)

        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
            handleFileSelect(files[0])
        }
    }, [handleFileSelect])

    const handleRemoveFile = () => {
        setPreviewURL(null)
        if (previewURL) {
            URL.revokeObjectURL(previewURL)
            setPreviewURL(null)
        }

        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
        onFileRemove?.()
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }
    return (
        <div className='w-full'>
            <input
                ref={fileInputRef}
                type="file"
                accept='image/*'
                className='sr-only'
                id='file-upload'
                placeholder='upload'
                onChange={handleFileChange}
            />
            {!selectedFile ? (
                <div
                    className={`relative border-2 border-dashed border-neutral-600 ${isDragOver ? 'border-orange-500 bg-orange-50' : 'bg-neutral-100'} transition-all duration-200 cursor-pointer hover:bg-orange-400/5 hover:border-orange-500 h-full w-full rounded-2xl`}
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    {!isDragOver ? (
                        <div className='flex flex-col items-center justify-center p-8 text-center gap-5'>
                            <div className='p-3 rounded-full bg-neutral-200'>
                                <Upload className='w-8 h-8 text-neutral-700 ' />
                            </div>
                            <h3 className='text-sm text-neutral-700'>Upload your image here, or click to browse</h3>
                            <div className=''>
                                <button type='button' className='flex items-center justify-center text-sm px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400'>
                                    <ImageIcon className='h-4 w-4 mr-2 ' />
                                    <span className='mt-0.5'>Choose File</span>
                                </button>
                                <p className='text-xs mt-1'>Max file size: 500kb</p>
                            </div>
                        </div>
                    ) : (
                        <div className=' w-full flex flex-col items-center justify-center border border-orange-300 h-56 border-dashed'>
                            <Upload className='w-8 h-8' />
                            <h3 className='text-neutral-700 font-semibold'>Drop it Here</h3>
                        </div>
                    )}
                </div>
            ) : (
                <div className='p-4 w-full '>
                    {previewURL ? (
                        <div className='relative border-2 border-dashed border-orange-400 rounded-lg'>
                            <img
                                src={previewURL}
                                alt={selectedFile.name}
                                className='w-full h-48 object-cover rounded-lg'

                            />
                            <button
                                onClick={handleRemoveFile}
                                className=' absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-md bg-orange-300 hover:bg-orange-400 transition-all duration-200 ease-in'>
                                <X className='h-6 w-6 text-white' />
                            </button>
                        </div>
                    ) : (
                        <div className='flex items-center justify-center p-4 bg-neutral-200 rounded-lg h-56'>
                            <div
                                className='flex items-center flex-col justify-center space-x-3'>
                                <div className='p-2 rounded bg-neutral-700/10'>
                                    <ImageIcon
                                        className='w-24 h-24 text-neutral-700' />
                                </div>
                                <div className=' '>
                                    <p className='font-medium text-neutral-500 text'>{selectedFile.name}</p>
                                    <p className='text-xs'>{(selectedFile.size / 1024 / 1024).toFixed(2)}MB</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {uploading && (
                        <div className='mt-3'>
                            <div className='flex items-center justify-between text-sm mb-1'>
                                <span className='text-sm text-neutral-500'>Uploading</span>
                                <span className='text-neutral-700 font-medium'>
                                    Processing
                                </span>
                            </div>
                            <div className='w-full bg-neutral-300 rounded-full h-2'>
                                <div className='bg-orange-500 h-2 rounded-full animate-pulse w-3/4'></div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default FileUpload