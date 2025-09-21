import React from 'react'

const Input = ({ className="", ...props }) => {
    return (
        <input
            className={`w-full px-2 py-2 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors  ${className}`}
            {...props}
        />
    )
}

export default Input