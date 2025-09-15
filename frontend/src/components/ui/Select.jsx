import React from 'react'

const Select = ({ setOption, option }) => {
    const options = [
        { value: "", label: "Choose a category" },
        { value: "tech", label: "Technology" },
        { value: "design", label: "Design" },
        { value: "business", label: "Business" },
        { value: "marketing", label: "Marketing" },
        { value: "finance", label: "Finance" },
    ]
    return (
        <div className='w-full flex flex-col px-2'>
            <label htmlFor="category">Select article category</label>
            <select
                name="category"
                id="category"
                className='w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none mt-2'
                value={option}
                onChange={(e) => setOption(e.target.value)}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select