import React, { useEffect, useState } from "react"

export default function Users() {

    const [users, setUsers] = useState([])
    
    useEffect(async () => {
        await fetch('')
            .then(res => res.json)
            .then(data => {
                setUsers(Object.entries(data))
            })
    }, [])

    return (
        <ul role="list" className="divide-y divide-gray-100 mx-auto mt-16 max-w-xl sm:mt-20">
        {users.map((user) => (
            <li key={user.email} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <span className="text-sm font-semibold leading-6 text-gray-900">{user.name}</span>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <button type="button" class="text-sm">Edit</button>
                    <button type="button" class="text-sm">Delete</button>
                </div>
            </li>
        ))}
        </ul>
    )
}
