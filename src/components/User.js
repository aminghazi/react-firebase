import React from 'react'

export default function User(props) {

    let { name, email, family } = props
    
    return (
        <li key={email} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                <span className="text-sm font-semibold leading-6 text-gray-900">{name} {family}</span>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{email}</p>
                </div>
            </div>
            <div className="flex">
                <button type="button" className="text-sm p-1">Edit</button>
                <button type="button" className="text-sm p-1">Delete</button>
            </div>
        </li>
    )
}
